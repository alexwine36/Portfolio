import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import React from 'react';
import RemarkLink from './index';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  pages: {
    nodes: [
      {
        path: '/sample/',
      },
    ],
  },
}));

describe('RemarkLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RemarkLink href="/sample/" />);
    expect(baseElement).toBeTruthy();
  });
});
