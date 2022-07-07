import type {
  BlockContent,
  DefinitionContent,
  ListItem,
  PhrasingContent,
  Root,
  StaticPhrasingContent,
  TableCell,
  TableRow,
} from 'mdast';

export const parseResume = (data: Root) => {
  // return (tree: Root) => {
  //   visit(tree, (node) => {
  //     // `node` can now be one of the nodes for JSX, expressions, or ESM.
  //   })
  // }
  return parseChildren(data.children);
};
type ChildType =
  | PhrasingContent[]
  | (BlockContent | DefinitionContent)[]
  | ListItem[]
  | TableRow[]
  | TableCell[]
  | StaticPhrasingContent[];

const parseChildren = (data: Root['children']) => {
  return data
    .map((d) => {
      if (d.type === 'text') {
        return d.value;
      }
      if ('children' in d) {
        // if (d.type === 'link') {
        //   return undefined;
        // }

        if (d.type === 'paragraph' && d.children.length > 1) {
          return d.children
            .map((c: ChildType[0]) => {
              if ('value' in c) {
                return c.value;
              }
            })
            .filter((c) => !!c)
            .join(' ');
        }
        return parseChildren(d.children);
      }
    })
    .flat()
    .filter((d) => !!d);
};
