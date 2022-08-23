import {
  Checkbox,
  Divider,
  Paper,
  styled,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { memo } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import RemarkLink from '../../src/components/remark-link';
const space = 3;

const AbbrText = styled(Typography)(({ theme }) => ({
  textDecoration: `underline wavy ${theme.palette.text.disabled}`,
}));

const components = {
  svg: (() => {
    const Svg = (props) => {
      // console.log(props);
      const theme = useTheme();
      const { children, ...rest } = props;

      if ('aria-hidden' in props) {
        return <svg {...rest}>{children}</svg>;
      }

      return (
        <Zoom
          overlayBgColorEnd={theme.palette.background.default}
          // sx={{ marginY: space }}
          // {...props}
          // component="h2"
          // variant="h3"
        >
          <svg {...rest}>{children}</svg>
        </Zoom>
      );
    };
    return memo(Svg);
  })(),
  abbr: (props) => {
    // console.log(props);
    return (
      <Tooltip title={props.title}>
        <AbbrText
          as="span"
          // sx={{
          //   textDecoration: `underline wavy $`,
          // }}
        >
          {props.children}
        </AbbrText>
      </Tooltip>
    );

    // <abbr style={{ color: 'green' }} {...props} />;
  },
  p: Typography,
  h1: (() => {
    const H1 = (props) => (
      <Typography
        sx={{ marginY: space }}
        {...props}
        component="h2"
        variant="h3"
      />
    );
    return memo(H1);
  })(),
  h2: (() => {
    const H2 = (props) => (
      <Typography
        sx={{ marginY: space }}
        {...props}
        component="h3"
        variant="h4"
      />
    );
    return memo(H2);
  })(),
  h3: (() => {
    const H3 = (props) => (
      <Typography
        sx={{ marginY: space }}
        {...props}
        component="h4"
        variant="h5"
      />
    );
    return memo(H3);
  })(),
  h4: (() => {
    const H4 = (props) => (
      <Typography
        sx={{ marginY: space }}
        {...props}
        component="h5"
        variant="h6"
      />
    );
    return memo(H4);
  })(),
  h5: (() => {
    const H5 = (props) => (
      <Typography
        sx={{ marginY: space }}
        {...props}
        component="h6"
        variant="h6"
      />
    );
    return memo(H5);
  })(),
  h6: (() => {
    const H6 = (props) => (
      <Typography
        sx={{ marginY: space }}
        {...props}
        component="h6"
        variant="h6"
      />
    );
    return memo(H6);
  })(),
  blockquote: (() => {
    const Blockquote = (props) => (
      <Paper style={{ borderLeft: '4px solid grey', padding: 8 }} {...props} />
    );
    return memo(Blockquote);
  })(),
  ul: (() => {
    const Ul = (props) => <Typography {...props} component="ul" />;
    return memo(Ul);
  })(),
  ol: (() => {
    const Ol = (props) => <Typography {...props} component="ol" />;
    return memo(Ol);
  })(),
  li: (() => {
    const Li = (props) => <Typography {...props} component="li" />;
    return memo(Li);
  })(),
  table: (() => {
    const Table = (props) => <Table {...props} />;
    return memo(Table);
  })(),
  tr: (() => {
    const Tr = (props) => <TableRow {...props} />;
    return memo(Tr);
  })(),
  td: (() => {
    const Td = ({ align, ...props }) => (
      <TableCell align={align || undefined} {...props} />
    );
    return memo(Td);
  })(),
  tbody: (() => {
    const TBody = (props) => <TableBody {...props} />;
    return memo(TBody);
  })(),
  th: (() => {
    const Th = ({ align, ...props }) => (
      <TableCell align={align || undefined} {...props} />
    );
    return memo(Th);
  })(),
  thead: (() => {
    const THead = (props) => <TableHead {...props} />;
    return memo(THead);
  })(),
  span: ((obj) => {
    // console.log('Object', obj);

    const Image = (props) => {
      const theme = useTheme();
      if (props.className === 'gatsby-resp-image-wrapper') {
        return (
          <Zoom
            overlayBgColorEnd={theme.palette.background.default}
            wrapStyle={{
              // width: '100%',
              // height: '100%',
              display: 'block',
            }}
          >
            <span {...props}></span>
          </Zoom>
        );
      }
      return <span {...props}></span>;
    };
    return memo(Image);
  })(),
  // code: CodeBlock,
  hr: Divider,
  input: (() => {
    const Input = (props) => {
      const { type } = props;
      if (type === 'checkbox') {
        return <Checkbox {...props} disabled={false} readOnly={true} />;
      }
      return <input {...props} />;
    };
    return memo(Input);
  })(),
  wrapper: (() => {
    const Wrapper = (props) => <div {...props} className="markdown-body" />;
    return memo(Wrapper);
  })(),
  a: (() => {
    // const LinkDisplay = (props) => {
    //   if (
    //     (`${props.href}`.startsWith('/') || `${props.href}`.startsWith('#')) &&
    //     !`${props.href}`.startsWith('/static/')
    //   ) {
    //     const { href, ...p } = props;
    //     return <Link component={GLink} to={href} {...p} />;
    //   }
    //   return (
    //     <Link rel="nofollow noopener noreferrer" target="_blank" {...props} />
    //   );
    // };
    return memo(RemarkLink);
  })(),
};

export default components;
