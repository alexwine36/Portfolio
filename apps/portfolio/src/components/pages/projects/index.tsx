import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChipListDisplay, MasonryGridComponent } from '@portfolio/ui';
import { graphql, PageProps, Script } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import pluralize from 'pluralize';
import Sticky from 'react-stickynode';
import { usePage } from '../../../hooks/use-pages/use-pages';
import { generateTagLink } from '../../../utilities/generate-tag-link';
import ParallaxSectionDisplay from '../../parallax-section-display';
import ProjectCard from '../../project-card';
import SeoFormatter from '../../seo-formatter/seo-formatter';

/* eslint-disable-next-line */
export interface ProjectPageProps extends PageProps<Queries.ProjectPageQuery> {}

const StyledProjectPage = styled('div')`
  // color: pink;
`;

const HeroImage = styled('div')(
  ({ theme }) => `

height: 50vh;
display: flex;
align-items: end;
padding: ${theme.spacing(3)};
margin-bottom: ${theme.spacing(3)};
position: relative;
`
);

const BackgroundImage = styled(GatsbyImage)(
  ({ theme }) => `
  position: absolute !important;
  z-index: -10;
  width: 100%;
  height: 100%;
  left: 0;


`
);

export function ProjectPage(props: ProjectPageProps) {
  // console.log(props.data.mdx);
  // console.log(props.data.related);
  const page = usePage('projects');
  const { mdx, related } = props.data;
  const { frontmatter, body, timeToRead, tableOfContents } = mdx;
  const { title, tags, hero } = frontmatter;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const shadowColor = '255';

  const init = () => {
    (window as any).mermaid.initialize({
      // startOnLoad: true,
      theme: 'dark',
    });
    (window as any).mermaid.init('.mermaid');
  };

  return (
    <StyledProjectPage>
      <Script
        strategy="idle"
        src="https://unpkg.com/mermaid@9.1.3/dist/mermaid.min.js"
        onLoad={() => {
          console.log('Mermaid Loaded');
          init();
        }}
      ></Script>
      <Script
        strategy="idle"
        src="https://unpkg.com/mermaid@9.1.3/dist/mermaid.min.js.map"
      ></Script>
      <SeoFormatter mdx={mdx} />
      <HeroImage>
        <BackgroundImage
          alt="Hero Image"
          image={hero.childImageSharp.gatsbyImageData}
        ></BackgroundImage>
        <Box>
          <Typography variant="h1">{title}</Typography>
          <Typography
            sx={{
              marginLeft: 2,
            }}
            variant="overline"
          >
            {pluralize('minute', timeToRead, true)}
          </Typography>
        </Box>
      </HeroImage>
      <ParallaxSectionDisplay page={page} hideHeader>
        <Container>
          <ChipListDisplay
            tags={tags.map((t) => ({
              name: t,
              link: generateTagLink(t),
            }))}
          />

          <Grid
            container
            spacing={3}
            sx={{
              ...(matches && {
                flexDirection: 'column-reverse',
              }),
            }}
          >
            <Grid item xs>
              <Card>
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <MDXRenderer>{body}</MDXRenderer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={2} zeroMinWidth>
              <Sticky enabled={true} top={matches ? 25 : 50}>
                <ButtonGroup
                  sx={{
                    overflow: 'unset',
                    position: 'sticky',
                    top: 0,
                    backgroundImage: `radial-gradient(

                      rgba(255, 255, 255, 0.15),
                      rgba(255, 255, 255, 0)
                    )`,
                    backdropFilter: 'blur(20px)',
                    boxShadow: `${theme.shadows[1].replace(
                      /rgba\(0,0,0/gm,
                      `rgba(${shadowColor},${shadowColor},${shadowColor}`
                    )}`,
                    // border: `1px solid ${theme.palette.divider}`,

                    textAlign: 'center',
                  }}
                  orientation={matches ? 'horizontal' : 'vertical'}
                  variant="text"
                  color="info"
                >
                  {(tableOfContents as any).items?.map((item) => (
                    <Button key={item.url} href={item.url}>
                      {item.title}
                    </Button>
                  ))}
                </ButtonGroup>
              </Sticky>
            </Grid>
          </Grid>

          {/* <Typography variant="h1" component="h1">
          {title}
        </Typography> */}
          <Box
            sx={{
              marginTop: 4,
            }}
          >
            <MasonryGridComponent>
              {related.nodes.map((node) => {
                return (
                  // <Grid key={node.slug} item xs>
                  <ProjectCard small key={node.slug} node={node}></ProjectCard>
                  // </Grid>
                );
              })}
            </MasonryGridComponent>
          </Box>
        </Container>
      </ParallaxSectionDisplay>
    </StyledProjectPage>
  );
}

export const pageQuery = graphql`
  query ProjectPage($slug: String, $tags: [String]) {
    mdx(slug: { eq: $slug }) {
      excerpt
      slug
      frontmatter {
        tags
        title
        date
        description
        hero {
          childImageSharp {
            gatsbyImageData(
              transformOptions: {
                duotone: { highlight: "#49afe2", shadow: "#000000" }
                fit: COVER
              }
              placeholder: BLURRED
              # layout: CONSTRAINED

              formats: [AUTO, WEBP]
            )
            ogA: gatsbyImageData(
              height: 600
              width: 800
              transformOptions: {
                duotone: { highlight: "#49afe2", shadow: "#000000" }
                fit: COVER
              }
            )
            ogB: gatsbyImageData(
              height: 800
              width: 900
              transformOptions: {
                duotone: { highlight: "#49afe2", shadow: "#000000" }
                fit: COVER
              }
            )
          }
        }
      }
      tableOfContents
      timeToRead
      body
    }
    related: allMdx(
      filter: {
        frontmatter: { tags: { in: $tags }, published: { eq: true } }
        slug: { ne: $slug }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      ...ProjectExcerptFragment
    }
  }
`;

export default ProjectPage;
