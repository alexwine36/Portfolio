import { BlogPostJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
import { getDescription } from '../../utilities/get-description';
/* eslint-disable-next-line */
export interface SeoFormatterProps {
  mdx: Queries.ProjectPageQuery['mdx'];
}

// const StyledSeoFormatter = styled.div`
//   color: pink;
// `;

const isBrowser = typeof window !== 'undefined';

export function SeoFormatter(props: SeoFormatterProps) {
  const { mdx } = props;

  const { frontmatter, slug, parent } = mdx;

  const { title, hero, date } = frontmatter;

  let modifiedTime = date;

  if ('modifiedTime' in parent) {
    modifiedTime = parent.modifiedTime;
  }
  const { ogA, ogB, gatsbyImageData } = hero.childImageSharp;

  const og_images = [
    {
      height: 630,
      width: 1200,
      src: `/static/${slug}twitter-card.jpg`,
    },
    {
      height: 110,
      width: 180,
      src: `/static/${slug}linkedin.jpg`,
    },
  ];
  // console.log(window.location.href);

  const generateImageLink = (src: string) => {
    let base = 'https://alex-wine-portfolio.netlify.app';

    if (isBrowser) {
      base = window.location.origin;
    }

    return `${base}${src}`;
  };
  return (
    <React.Fragment>
      <GatsbySeo
        title={title}
        openGraph={{
          title: title,
          images: og_images.map((og) => {
            const { height, width, src } = og;

            return {
              width,
              height,
              url: generateImageLink(src),
            };
          }),
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <BlogPostJsonLd
        title={title}
        url={generateImageLink(`/projects/${slug}`)}
        images={og_images.map((og) => generateImageLink(og.src))}
        datePublished={date}
        dateModified={modifiedTime}
        authorName="Alex Wine"
        description={getDescription(mdx)}
      />
    </React.Fragment>
  );
}

export default SeoFormatter;
