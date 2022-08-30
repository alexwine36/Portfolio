import { render } from '@testing-library/react';
import React from 'react';
import SkillHeaderDisplay from './index';

describe('SkillHeaderDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SkillHeaderDisplay
        skill={{
          date: '1 year ago',
          rating: 3,
          skill: 'Sample',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  // test('should format include correct data', () => {
  //   const { getByTestId } = render(
  //     <SkillHeaderDisplay
  //       skill={{
  //         date: '1 year ago',
  //         rating: 3,
  //         skill: 'Sample',
  //       }}
  //     />
  //   );
  //   const header = getByTestId('skill');
  //   expect(header.textContent).toBe('Sample');

  //   const time = getByTestId('skill-time');
  //   expect(time.textContent).toBe('~1 year');
  //   // console.log(container.firstChild.firstChild);
  //   const holder = getByTestId('container');
  //   console.log(holder.innerHTML);

  //   expect(holder).toMatchSnapshot();
  //   // const label = within(holder).getByLabelText('3 Stars');
  //   // const rating = getByTestId('rating');
  //   // // console.log(rating);
  //   // const label = within(rating);
  //   // expect(label).toBeTruthy();
  // });
});
