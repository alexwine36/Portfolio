import { render } from '@testing-library/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { TagPage } from '.';
import { projectCardData } from '../../../utilities/test/constants/project-card';

jest.mock('gatsby-plugin-transition-link/AniLink', () => {
  console.log('Yello');
});

describe('Skill/Tag Page', () => {
  test('should render correctly', () => {
    const { baseElement } = render(
      <HelmetProvider>
        <TagPage
          path={''}
          uri={''}
          location={undefined}
          navigate={undefined}
          children={undefined}
          params={undefined}
          pageResources={{
            component: undefined,
            json: {
              data: undefined,
              pageContext: undefined,
            },
            page: {
              componentChunkName: '',
              path: '',
              webpackCompilationHash: '',
              matchPath: '',
            },
          }}
          data={{
            projects: {
              totalCount: 0,
              nodes: [projectCardData],
            },
            skill: {
              date: '1 year ago',
              rating: 3,
              skill: 'Sample',
            },
          }}
          pageContext={undefined}
          serverData={undefined}
        />
      </HelmetProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
