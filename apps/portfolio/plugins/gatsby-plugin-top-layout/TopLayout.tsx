import { MDXProvider } from '@mdx-js/react';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@portfolio/theme';
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
        {/* <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js" /> */}
      </Helmet>
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
            '.markdown-body': {
              '>': {
                'h1, h2, h3, h4, h6, hr, p': {
                  margin: theme.spacing(3),
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
