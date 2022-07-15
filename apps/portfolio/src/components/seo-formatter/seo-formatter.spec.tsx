import { render } from '@testing-library/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SeoFormatter from './seo-formatter';

const data: Queries.ProjectPageQuery['mdx'] = {
  excerpt:
    'The Problem I was  Strongly  advised to find a new method to access the database and, we were already using the API for reports and…',
  slug: 'sample',
  frontmatter: {
    tags: ['MySQL'],
    title: 'MarkSystems GraphQL v2',
    date: '2020-01-17T00:00:00.000Z',
    description: null,
    hero: {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'constrained',
          placeholder: {
            fallback:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAAaI047UAsA//xAAYEAEAAwEAAAAAAAAAAAAAAAABECAhMf/aAAgBAQABBQKXg7T/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAUEAEAAAAAAAAAAAAAAAAAAAAw/9oACAEBAAY/Ah//xAAZEAACAwEAAAAAAAAAAAAAAAAAEQEQICH/2gAIAQEAAT8hpHIZDP8A/9oADAMBAAIAAwAAABDHL33/xAAYEQACAwAAAAAAAAAAAAAAAAABEQAQIf/aAAgBAwEBPxADHHf/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAgEBPxBj/8QAGBABAQEBAQAAAAAAAAAAAAAAAREQACH/2gAIAQEAAT8QkNNVDnIe9Mmf/9k=',
          },
          images: {
            fallback: {
              src: '/static/62914ba496b191f4a20a2e7b24007c15/f93f9/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg',
              srcSet:
                '/static/62914ba496b191f4a20a2e7b24007c15/d58ce/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 1350w,\n/static/62914ba496b191f4a20a2e7b24007c15/6af24/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 2700w,\n/static/62914ba496b191f4a20a2e7b24007c15/f93f9/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 5400w',
              sizes: '(min-width: 5400px) 5400px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/62914ba496b191f4a20a2e7b24007c15/706e7/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 1350w,\n/static/62914ba496b191f4a20a2e7b24007c15/ee31b/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 2700w,\n/static/62914ba496b191f4a20a2e7b24007c15/d4382/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 5400w',
                type: 'image/webp',
                sizes: '(min-width: 5400px) 5400px, 100vw',
              },
            ],
          },
          width: 5400,
          height: 5400,
        },
        ogA: {
          layout: 'constrained',
          backgroundColor: '#f8f8f8',
          images: {
            fallback: {
              src: '/static/62914ba496b191f4a20a2e7b24007c15/a7419/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg',
              srcSet:
                '/static/62914ba496b191f4a20a2e7b24007c15/2fba2/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 200w,\n/static/62914ba496b191f4a20a2e7b24007c15/50976/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 400w,\n/static/62914ba496b191f4a20a2e7b24007c15/a7419/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 800w,\n/static/62914ba496b191f4a20a2e7b24007c15/883bf/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 1600w',
              sizes: '(min-width: 800px) 800px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/62914ba496b191f4a20a2e7b24007c15/ac100/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 200w,\n/static/62914ba496b191f4a20a2e7b24007c15/0f911/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 400w,\n/static/62914ba496b191f4a20a2e7b24007c15/61ee4/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 800w,\n/static/62914ba496b191f4a20a2e7b24007c15/b3ed1/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 1600w',
                type: 'image/webp',
                sizes: '(min-width: 800px) 800px, 100vw',
              },
            ],
          },
          width: 800,
          height: 600,
        },
        ogB: {
          layout: 'constrained',
          backgroundColor: '#f8f8f8',
          images: {
            fallback: {
              src: '/static/62914ba496b191f4a20a2e7b24007c15/23993/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg',
              srcSet:
                '/static/62914ba496b191f4a20a2e7b24007c15/7b30c/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 225w,\n/static/62914ba496b191f4a20a2e7b24007c15/9d6b3/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 450w,\n/static/62914ba496b191f4a20a2e7b24007c15/23993/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 900w,\n/static/62914ba496b191f4a20a2e7b24007c15/b42ee/sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg 1800w',
              sizes: '(min-width: 900px) 900px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/62914ba496b191f4a20a2e7b24007c15/0d5fe/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 225w,\n/static/62914ba496b191f4a20a2e7b24007c15/2c795/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 450w,\n/static/62914ba496b191f4a20a2e7b24007c15/685b5/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 900w,\n/static/62914ba496b191f4a20a2e7b24007c15/645f2/sunder-muthukumaran-n7eJHQwefeI-unsplash.webp 1800w',
                type: 'image/webp',
                sizes: '(min-width: 900px) 900px, 100vw',
              },
            ],
          },
          width: 900,
          height: 800,
        },
      },
    },
  },

  tableOfContents: {
    items: [
      {
        url: '#the-problem',
        title: 'The Problem',
      },
      {
        url: '#the-solution',
        title: 'The Solution',
      },
    ],
  },
  timeToRead: 1,
  body: 'var _excluded = ["components"];\n\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "MarkSystems GraphQL v2",\n  "date": "2020-01-17T00:00:00.000Z",\n  "published": false,\n  "hero": "sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg",\n  "tags": ["MySQL"]\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", {\n    "id": "the-problem"\n  }, "The Problem"), mdx("p", null, "I was ", mdx("strong", {\n    parentName: "p"\n  }, "Strongly"), " advised to find a new method to access the database and, we were already using the API for reports and applications."), mdx("h1", {\n    "id": "the-solution"\n  }, "The Solution"), mdx("p", null, "The application was initially written using @prisma/photon - 2.0.0-preview019. I had finally gotten access to a replicated MySQL database thanks to the incredibly helpful people at ECI, the company that owns MarkSystems. "), mdx("p", null, "The trouble now was that prisma2 was not terribly reliable yet. Nexus, the plugin to generate a GraphQL schema from a Prisma model, was also not too reliable. The solution I found was to write several scripts to bridge the gaps between the two and, find a new method of hosting. "), mdx("p", null, "I love Kubernetes but, I had read about Serverless which seemed like a better choice for this particular program using Next.js. The ability to have automated review environments through Vercel, at the time ZEIT, was also appealing.\\nThe speed boost this gave previous applications was incredible and continued to get better through development iterations. However this was only one of the prisma endpoints we had and needed a better method to connect."), mdx(NextPostComponent, {\n    slug: "federated-graphql-api/",\n    mdxType: "NextPostComponent"\n  }));\n}\n;\nMDXContent.isMDXComponent = true;',
};

describe('SeoFormatter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HelmetProvider>
        <SeoFormatter mdx={data} />
      </HelmetProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
