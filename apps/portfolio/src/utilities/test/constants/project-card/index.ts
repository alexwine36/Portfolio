interface Data
  extends Omit<
    Queries.ProjectsPageQuery['allMdx']['nodes'][0],
    'tableOfContents'
  > {
  tableOfContents: {
    items: (
      | {
          url: string;
          title: string;
        }
      | {
          url: string;
          title: string;
          items: {
            url: string;
            title: string;
          }[];
        }
    )[];
  };
}

export const projectCardData: Data = {
  fields: {
    year: 2012,
  },
  frontmatter: {
    tags: ['React', 'Typescript'],
    title: 'Porfolio',
    description: null,
    fromNow: '5 years ago',

    hero: {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'constrained',
          placeholder: {
            fallback:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAwX/xAAYAQACAwAAAAAAAAAAAAAAAAAAAwEEBf/aAAwDAQACEAMQAAAB6acxFIAYybpd2EB2d//EABwQAAEFAAMAAAAAAAAAAAAAAAIAAQMQERITMv/aAAgBAQABBQK9Qyt2atRA28za5fX/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIREhP/2gAIAQMBAT8BwcmZTRKLi6s//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQERL/2gAIAQIBAT8Bs1CP/8QAGhAAAQUBAAAAAAAAAAAAAAAAAQACECAxEf/aAAgBAQAGPwKhbPRq00//xAAbEAEAAgIDAAAAAAAAAAAAAAABABARIWGRsf/aAAgBAQABPyHFYjK16R1zRhy1Qtx2NM8Z/9oADAMBAAIAAwAAABB0Fk//xAAZEQEAAgMAAAAAAAAAAAAAAAABABARIWH/2gAIAQMBAT8QXQYJIxC12f/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxC4tR0kIOX/xAAeEAACAQQDAQAAAAAAAAAAAAAAAREQITFhQVFxsf/aAAgBAQABPxBxI0eBD4JEISQSUbz7fTY8Xyz2UyPiP//Z',
          },
          images: {
            fallback: {
              src: '/static/3ddea9ff83bb77958713be096261b995/4ec6e/diego-ph-fIq0tET6llw-unsplash.jpg',
              srcSet:
                '/static/3ddea9ff83bb77958713be096261b995/4d3a9/diego-ph-fIq0tET6llw-unsplash.jpg 827w,\n/static/3ddea9ff83bb77958713be096261b995/fca05/diego-ph-fIq0tET6llw-unsplash.jpg 1654w,\n/static/3ddea9ff83bb77958713be096261b995/4ec6e/diego-ph-fIq0tET6llw-unsplash.jpg 3308w',
              sizes: '(min-width: 3308px) 3308px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/3ddea9ff83bb77958713be096261b995/7a7f7/diego-ph-fIq0tET6llw-unsplash.webp 827w,\n/static/3ddea9ff83bb77958713be096261b995/48707/diego-ph-fIq0tET6llw-unsplash.webp 1654w,\n/static/3ddea9ff83bb77958713be096261b995/2427b/diego-ph-fIq0tET6llw-unsplash.webp 3308w',
                type: 'image/webp',
                sizes: '(min-width: 3308px) 3308px, 100vw',
              },
            ],
          },
          width: 3308,
          height: 4135,
        },
      },
      duo: {
        gatsbyImageData: {
          layout: 'constrained',
          placeholder: {
            fallback:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBAv/EABcBAQEBAQAAAAAAAAAAAAAAAAIBAwT/2gAMAwEAAhADEAAAAeSO/LZiycaclyYL/8QAGxAAAgIDAQAAAAAAAAAAAAAAARAAAhESIjH/2gAIAQEAAQUCeYL9IibF29//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAXEAADAQAAAAAAAAAAAAAAAAABECAR/9oACAEBAAY/AoIez//EABoQAAMBAAMAAAAAAAAAAAAAAAABESAhMUH/2gAIAQEAAT8hwQ/SUomtOyHFeD//2gAMAwEAAgADAAAAENvVTP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAECH/2gAIAQMBAT8QBcOQF//EABcRAQEBAQAAAAAAAAAAAAAAAAEAECH/2gAIAQIBAT8QUMeyt//EABwQAQACAwADAAAAAAAAAAAAAAEAERAhQTFhsf/aAAgBAQABPxCsVGFpYGi+4su1D36WL+Dzbhnzn//Z',
          },
          images: {
            fallback: {
              src: '/static/3ddea9ff83bb77958713be096261b995/68615/diego-ph-fIq0tET6llw-unsplash.jpg',
              srcSet:
                '/static/3ddea9ff83bb77958713be096261b995/bca88/diego-ph-fIq0tET6llw-unsplash.jpg 827w,\n/static/3ddea9ff83bb77958713be096261b995/7b5e3/diego-ph-fIq0tET6llw-unsplash.jpg 1654w,\n/static/3ddea9ff83bb77958713be096261b995/68615/diego-ph-fIq0tET6llw-unsplash.jpg 3308w',
              sizes: '(min-width: 3308px) 3308px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/3ddea9ff83bb77958713be096261b995/1884a/diego-ph-fIq0tET6llw-unsplash.webp 827w,\n/static/3ddea9ff83bb77958713be096261b995/3d927/diego-ph-fIq0tET6llw-unsplash.webp 1654w,\n/static/3ddea9ff83bb77958713be096261b995/28175/diego-ph-fIq0tET6llw-unsplash.webp 3308w',
                type: 'image/webp',
                sizes: '(min-width: 3308px) 3308px, 100vw',
              },
            ],
          },
          width: 3308,
          height: 4135,
        },
      },
    },
  },
  excerpt:
    'The Problem Features Automatic Resume Generation Using Markdown data resume content is automatically parsed and saved for display.',
  tableOfContents: {
    items: [
      {
        url: '#the-problem',
        title: 'The Problem',
      },
      {
        url: '#features',
        title: 'Features',
        items: [
          {
            url: '#automatic-resume-generation',
            title: 'Automatic Resume Generation',
          },
        ],
      },
    ],
  },
  slug: 'portfolio/',
  timeToRead: 1,
};
