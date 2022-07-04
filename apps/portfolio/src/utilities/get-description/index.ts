import { ProjectExcerptFragmentFragment } from '../../../graphql-types';

type Data = Pick<
  ProjectExcerptFragmentFragment['nodes'][0],
  'excerpt' | 'tableOfContents'
> & {
  frontmatter?: Pick<
    ProjectExcerptFragmentFragment['nodes'][0]['frontmatter'],
    'description'
  >;
};
export const getDescription = (data: Data) => {
  let { excerpt } = data;
  const { frontmatter, tableOfContents } = data;
  const { description } = frontmatter;

  tableOfContents?.items?.forEach((item) => {
    excerpt = excerpt.replace(item.title, '');
    excerpt = excerpt.trim();
    excerpt = excerpt.replace('  ', ' ');
  });
  if (description) {
    excerpt = description;
  }

  return excerpt;
};
