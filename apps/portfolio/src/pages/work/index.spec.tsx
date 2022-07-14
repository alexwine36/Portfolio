import { render } from '@testing-library/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { WorkPage } from '.';

const props: any = {};
describe('WorkPage', () => {
  test('should render successfully', () => {
    const { baseElement } = render(
      <HelmetProvider>
        <WorkPage
          data={{
            allMdx: {
              edges: [],
            },
          }}
          {...props}
        />
      </HelmetProvider>

      // <div></div>
    );
    expect(baseElement).toBeTruthy();
    // expect(SectionDataDisplay).toBeCalled()
  });
});
