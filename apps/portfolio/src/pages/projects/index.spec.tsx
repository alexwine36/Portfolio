import { render } from '@testing-library/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ProjectsPage } from '.';

describe('Projects Page', () => {
  test('should render successfully', () => {
    const { baseElement } = render(
      <HelmetProvider>
        <ProjectsPage
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
            allMdx: {
              totalCount: 0,
              nodes: [],
            },
            tags: {
              group: [],
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
