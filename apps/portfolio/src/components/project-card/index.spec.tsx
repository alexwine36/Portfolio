import { render, within } from '@testing-library/react';
import React from 'react';
import { ProjectCard } from '.';
import { projectCardData } from '../../utilities/test/constants/project-card';
jest.mock('gatsby-plugin-transition-link/AniLink', () => {
  console.log('Yello');
});

const data = projectCardData;

describe('ProjectCard', () => {
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(
      <ProjectCard node={data} />
      // <div></div>
    );
    expect(baseElement).toBeTruthy();
    const cardHeader = getByTestId('card-header');

    const header = within(cardHeader).getByText(data.frontmatter.title);

    expect(header).toBeTruthy();
  });

  it('should render excerpts', () => {
    const { baseElement, getByTestId } = render(
      <ProjectCard node={data} />
      // <div></div>
    );
    expect(baseElement).toBeTruthy();
    const cardExcerpt = getByTestId('card-excerpt');

    data.tableOfContents.items.forEach((item) => {
      expect(cardExcerpt.textContent.includes(item.title)).toBe(false);
    });

    // const header = within(cardHeader).getByText(data.frontmatter.title);
    // console.log(header);

    // expect(header).toBeTruthy();
  });
});
