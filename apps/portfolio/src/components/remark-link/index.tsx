import { Link, Typography } from '@mui/material';
import { graphql, Link as GLink, useStaticQuery } from 'gatsby';
/* eslint-disable-next-line */
export interface RemarkLinkProps {
  href: string;
}

// const StyledRemarkLink = styled.div`
//   color: pink;
// `;

export function RemarkLink(props: RemarkLinkProps) {
  // return (
  //   <StyledRemarkLink>
  //     <h1>Welcome to RemarkLink!</h1>
  //   </StyledRemarkLink>
  // );
  function removeTrailingSlash(str: string) {
    return str.replace(/\/+$/, '');
  }
  const { pages } = useStaticQuery<Queries.PagesDataQuery>(graphql`
    query PagesData {
      pages: allSitePage {
        nodes {
          path
        }
      }
    }
  `);
  // console.log(pages);

  const res = pages.nodes.map((p) => removeTrailingSlash(p.path));

  if (
    (`${props.href}`.startsWith('/') || `${props.href}`.startsWith('#')) &&
    !`${props.href}`.startsWith('/static/')
  ) {
    const { href, ...p } = props;

    if (`${href}`.startsWith('/')) {
      if (!res.includes(removeTrailingSlash(href))) {
        // return p;
        console.warn('PAGE NOT FOUND', href, p);
        return <Typography component={'span'} {...p}></Typography>;
      }
    }

    return <Link component={GLink} to={href} {...p} />;
  }
  return <Link rel="nofollow noopener noreferrer" target="_blank" {...props} />;
}

export default RemarkLink;
