import _ from 'lodash';

export const generateTagLink = (tag: string) => {
  return `/tags/${_.kebabCase(tag)}/`;
};
