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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Libre+Franklin&family=Open+Sans:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        ></link>

        <script src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
        />

        {/* <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js" /> */}
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
            '.mermaid': {
              display: 'flex',
              justifyContent: 'center',
            },
            '.attributeBoxEven': {
              fill: '#1f2020 !important',
            },
            '.attributeBoxOdd': {
              fill: '#434545 !important',
            },
            '.markdown-body': {
              '>': {
                'h1, h2, h3, h4, h6, hr, p': {
                  margin: theme.spacing(3),
                  'img[alt="plat"]': {
                    width: '100%',
                    background: theme.palette.text.secondary,
                    padding: theme.spacing(3),
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
