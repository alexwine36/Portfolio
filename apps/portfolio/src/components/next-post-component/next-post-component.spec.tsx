import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import React from 'react';
import { projectCardData } from '../../utilities/test/constants/project-card';
import NextPostComponent from './next-post-component';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  projects: {
    nodes: [projectCardData],
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('NextPostComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextPostComponent slug={'portfolio/'} />);
    expect(baseElement).toBeTruthy();
  });
  it('should return nothing if not found successfully', () => {
    const { baseElement } = render(<NextPostComponent slug={'portfolior/'} />);
    expect(baseElement).toBeTruthy();
  });
});
