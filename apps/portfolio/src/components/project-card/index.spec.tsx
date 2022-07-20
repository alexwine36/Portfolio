import { render, screen, within } from '@testing-library/react';
import React from 'react';
import { ProjectCard } from '.';
import { projectCardData } from '../../utilities/test/constants/project-card';
jest.mock('gatsby-plugin-transition-link/AniLink', () => {
  console.log('Yello');
});

// jest.mock('@loadable/component', () => {
//   console.log('Yellor');
// });

const data = projectCardData;

// TODO: Find fix for rendering AniLink and Loadable

describe.skip('ProjectCard', () => {
  it('should render successfully', async () => {
    const { baseElement, getByTestId } = render(
      <ProjectCard node={data} />
      // <div></div>
    );

    expect(await screen.findByText(data.frontmatter.title)).toBeTruthy();

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
