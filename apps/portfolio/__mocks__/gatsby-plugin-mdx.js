/// <reference types="jest" />
const mdx = jest.requireActual('gatsby-plugin-mdx');

module.exports = {
  ...mdx,
  MDXRenderer: jest
    .fn()
    .mockImplementation(({ children, ...rest }) => (
      <div {...rest}>{children}</div>
    )),
};
