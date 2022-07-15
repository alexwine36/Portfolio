import { render } from '@testing-library/react';
import React from 'react';
import SectionDataDisplay from '.';

const baseItem = {
  pretitle: 'pretitle',
  title: 'title',
  subtitle: 'subtitle',
  content: 'content',
};

describe('SectionDataDisplay', () => {
  it('should render successfully', () => {
    // const { baseElement } = render(<SectionDataDisplay items={[]} />)
    const { baseElement } = render(<SectionDataDisplay items={[baseItem]} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render with Grid Size', () => {
    // const { baseElement } = render(<SectionDataDisplay items={[]} />)
    const { baseElement } = render(
      <SectionDataDisplay items={[baseItem]} gridSize={2} />
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render children', () => {
    // const { baseElement } = render(<SectionDataDisplay items={[]} />)
    const { baseElement, getByTestId } = render(
      <SectionDataDisplay items={[baseItem]} gridSize={2} />
    );

    const mdx = getByTestId('mdx');

    expect(mdx.textContent).toBe('content');

    expect(baseElement).toBeTruthy();
  });
  it('should render with no title', () => {
    // const { baseElement } = render(<SectionDataDisplay items={[]} />)
    const { baseElement } = render(
      <SectionDataDisplay
        items={[{ ...baseItem, title: undefined }]}
        gridSize={2}
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
