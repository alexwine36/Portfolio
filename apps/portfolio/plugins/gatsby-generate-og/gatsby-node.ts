import { GatsbyNode } from 'gatsby';
import { processFile } from 'gatsby-plugin-sharp/process-file';
import Jimp from 'jimp';
import path from 'path';
import twitterCard from 'wasm-twitter-card';
const WIDTH = 1200;
const HEIGHT = 630;

async function writeTextToCard(buffer) {
  return await new Jimp({ data: buffer, width: WIDTH, height: HEIGHT });
}
export const createPages: GatsbyNode['createPages'] = async ({
  // actions,
  graphql,
  reporter,
}) => {
  const timer = reporter.activityTimer('Generate OG');
  timer.start();
  const { data } = await graphql<Queries.CreateOGQuery>(`
    query CreateOG {
      site {
        siteMetadata {
          description
          title
        }
      }
      projects: allMdx(
        filter: {
          fields: { source: { eq: "projects" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        nodes {
          slug
          frontmatter {
            title
            fb: hero {
              id
              absolutePath
            }
          }
        }
      }
    }
  `);

  //   childImageSharp {
  //     gatsbyImageData(
  //       transformOptions: {
  //         duotone: { highlight: "#49afe2", shadow: "#000000" }
  //         fit: COVER
  //       }
  //       formats: JPG
  //       height: 630
  //       width: 1200
  //     )
  //   }

  const { title } = data.site.siteMetadata;
  data.projects.nodes.map(async (project) => {
    const { slug, frontmatter } = project;
    const { fb } = frontmatter;
    const post_title = frontmatter.title;

    // const image = await graphql<
    //   Queries.ImageDataQuery,
    //   Queries.ImageDataQueryVariables
    // >(
    //   `
    //     query ImageData($id: String) {
    //       imageSharp(id: { eq: $id }) {
    //         resize(
    //           duotone: { highlight: "#49afe2", shadow: "#000000" }
    //           fit: COVER
    //           height: 630
    //           width: 1200
    //         ) {
    //           src
    //         }
    //       }
    //     }
    //   `,
    //   {
    //     id: fb.id,
    //   }
    // );

    // console.log(image);
    // console.log(fb);
    reporter.info(`Generating Twitter Card for ${post_title}`);
    const getFileName = (type: string) => {
      return path.join(
        './public',
        'static',
        slug,

        `${type}.${fb.absolutePath.split('/').pop().split('.').pop()}`
      );
    };
    const outputPath = getFileName('twitbase');
    // path.join(
    //   './public',
    //   slug,
    //   fb.absolutePath.split('/').pop().split('.').pop()
    // );
    const image = await processFile(fb.absolutePath, [
      {
        outputPath,
        args: {
          duotone: { highlight: '#49afe2', shadow: '#000000' },
          height: 630,
          width: 1200,
          toFormat: 'jpeg',
        },
      },
      {
        outputPath: getFileName('linkedin'),
        args: {
          duotone: { highlight: '#49afe2', shadow: '#000000' },
          height: 110,
          width: 180,
          toFormat: 'jpeg',
        },
      },
    ]);

    // console.log(image);
    const generateOutputName = (name: string) => {
      return path.join('./public', 'static', slug, `${name}.jpg`);
    };
    const output = generateOutputName('twitter-card');

    // const input = path.join('./public', image.data.imageSharp.resize.src);
    // console.log(input);

    // const background = "#000000"
    const fontColor = '#ffffff';
    const titleFontSize = 96;
    const subtitleFontSize = 60;
    const fontStyle = 'monospace';
    const separator = '|';

    const author = 'Alex Wine';

    let formattedDetails = '';
    if (title || author) {
      formattedDetails =
        title && author ? `${title} ${separator} ${author}` : title || author;
    }

    // const fontToUint8Array = fontFile
    //   ? fs.readFileSync(require.resolve(fontFile), null)
    //   : new Uint8Array();

    // if (fontFile) {
    //   fontStyle = "custom";
    // }
    function hexToRgb(hex) {
      const hexCode = hex.replace(/^#/, '');
      const bigint = parseInt(hexCode, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return [r, g, b];
    }
    const buffer = twitterCard.generate_text(
      post_title,
      formattedDetails,
      titleFontSize,
      subtitleFontSize,
      hexToRgb(fontColor),
      fontStyle,
      undefined
    );
    const base = await Jimp.read(outputPath);
    const text = await writeTextToCard(buffer);
    const res = base.composite(text, 0, 0);
    // const res = text;

    res.writeAsync(output);
    // const li = res.resize(180, 110);
    // li.writeAsync(generateOutputName('linkedin'));
    reporter.success(`Generated ${post_title} card`);
  });
  timer.end();
};
