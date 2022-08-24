import { MDXProvider } from '@mdx-js/react';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@portfolio/theme';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { ParallaxProvider } from 'react-scroll-parallax';
import PageLayout from '../../src/layouts/page-layout/page-layout';
import components from './components';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <GatsbySeo titleTemplate="Alex Wine | %s" title="Portfolio" />
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            html: {
              scrollBehavior: 'smooth',
            },
            '.MuiBottomNavigationAction-label': {
              fontWeight: 800,
            },
            '.mermaid, [data-rmiz-modal-content] > svg': {
              display: 'flex',
              justifyContent: 'center',
              lineHeight: 1,
              textAlign: 'center',
              // fontSize: '14px',
              svg: {
                height: '100%',
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
              },
              // '.cluster-label > foreignObject > div': {
              //   lineHeight: 1,
              // },
              '.nodeLabel': {
                fontSize: 14,
              },
              '.label': {
                fontSize: 14,
              },
              'text.actor': {
                tspan: {
                  // fontFamily: theme.typography.body1.fontFamily,
                  // fontWeight: theme.typography.body1.fontWeight,
                  // fontSize: theme.typography.body1.fontSize,
                },
              },
              '.statediagram-state': {
                '& rect.basic[width="15"]': {
                  visibility: 'hidden',
                },
              },
            },
            '.attributeBoxEven': {
              fill: '#1f2020 !important',
            },
            '.attributeBoxOdd': {
              fill: '#434545 !important',
            },
            '.footnotes': {
              marginTop: theme.spacing(3),
              ol: {
                marginTop: theme.spacing(2),
              },
            },
            // #root-4 > text > tspan
            // '.mermaid > text.actor > tspan': {
            //   fontFamily: theme.typography.body1,
            // },
            '.anchor': {
              fill: theme.palette.text.primary,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              svg: {
                transition: 'opacity .5s',
                opacity: 0,
              },
            },
            '.anchor.before': {
              top: '35%',
              paddingRight: theme.spacing(2),
            },

            '.markdown-body': {
              '>': {
                'h1, h2, h3, h4, h5, h6, hr, p, div': {
                  margin: theme.spacing(3),

                  // '.gatsby-resp-image-wrapper': {
                  //   // background: 'blue',
                  //   display: 'flex',
                  //   justifyContent: 'center',
                  // },
                  // '&:has(.gatsby-resp-image-wrapper)': {
                  //   background: 'red',

                  //   // ':has(.gatsby-resp-image-wrapper)': {
                  //   //   background: 'red',
                  //   // },
                  // },
                },
                'img[alt="plat"]': {
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(3),
                  width: '75%',
                  // margin: 'auto',
                  background: theme.palette.text.secondary,
                  padding: theme.spacing(3),
                },

                // p: {
                //   // maxWidth: 'unset',
                //   // '&:has(span)': {
                //   //   maxWidth: 'unset',
                //   // },
                //   // '.gatsby-resp-image-wrapper': {
                //   //   margin: 'auto',
                //   //   maxWidth: 'unset',
                //   // },
                // },
                'h1, h2, h3, h4, h5, h6': {
                  '&:hover, &:focus': {
                    '.anchor svg': {
                      opacity: 1,
                    },
                  },
                },
              },
            },
          }}
        ></GlobalStyles>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MDXProvider components={components}>
          <ParallaxProvider>
            <PageLayout>{props.children}</PageLayout>
          </ParallaxProvider>
        </MDXProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
