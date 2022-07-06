import { BlogPostJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
import { ProjectPageQuery } from '../../../graphql-types';
import { getDescription } from '../../utilities/get-description';
/* eslint-disable-next-line */
export interface SeoFormatterProps {
  mdx: ProjectPageQuery['mdx'];
}

// const StyledSeoFormatter = styled.div`
//   color: pink;
// `;

const isBrowser = typeof window !== 'undefined';

export function SeoFormatter(props: SeoFormatterProps) {
  const { mdx } = props;

  const { frontmatter, slug } = mdx;
  const { title, hero, date } = frontmatter;
  const { ogA, ogB, gatsbyImageData } = hero.childImageSharp;

  const og_images = [ogA, ogB, gatsbyImageData];
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
            const { height, width } = og;

            return {
              width,
              height,
              url: generateImageLink(og.images.fallback.src),
            };
          }),
        }}
      />
      <BlogPostJsonLd
        title={title}
        url={generateImageLink(`/projects/${slug}`)}
        images={og_images.map((og) =>
          generateImageLink(og.images.fallback.src)
        )}
        datePublished={date}
        authorName="Alex Wine"
        description={getDescription(mdx)}
      />
    </React.Fragment>
  );
}

export default SeoFormatter;
