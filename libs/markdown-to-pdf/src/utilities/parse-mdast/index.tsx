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
import pdf from 'pdfjs';

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

const parseChildren = (data: Root['children']): (string | undefined)[] => {
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

const formatURL = (url: string) => {
  const isBrowser = typeof window !== 'undefined';

  let base = 'https://alex-wine-portfolio.netlify.app';

  if (isBrowser) {
    base = window.location.origin;
  }

  if (url.startsWith('/')) {
    return `${base}${url}`;
  }
  return url;
};

const parseListItem = (data: ListItem, line: pdf.Text) => {
  return data.children.map((children, idx) => {
    // const line = doc.text();
    if (children.type === 'paragraph') {
      children.children.forEach((child, idx) => {
        if (idx === 0) {
          line.br().add('-');
        }
        if (child.type === 'text') {
          if (child.value === '.') {
            line.append(child.value);
          } else {
            line.add(child.value);
          }
        }
        if (child.type === 'link') {
          const linkVal = child.children[0];
          if (linkVal.type === 'text') {
            line.add(linkVal.value, {
              link: formatURL(child.url),
              underline: true,
              color: 0x569cd6,
            });
          }
        }
      });
      // line.br();
    }
    return line;
  });
};

export const parseToDoc = (data: Root['children'], doc: pdf.Text) => {
  return data.forEach((d) => {
    if (d.type === 'list') {
      return d.children.forEach((listItem, idx) => {
        parseListItem(listItem, doc);
      });
    }
  });
};
