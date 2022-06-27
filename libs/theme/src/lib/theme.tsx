import { createTheme, responsiveFontSizes } from '@mui/material';
import { deepmerge } from '@mui/utils';

const baseTheme = createTheme({
  typography: {
    fontFamily: `Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
    h1: {
      fontWeight: '800',
    },
    h2: {
      fontWeight: '800',
    },
    h3: {
      fontWeight: '800',
    },
    h4: {
      fontWeight: '800',
    },
    h5: {
      fontWeight: '800',
    },
    h6: {
      fontWeight: '800',
    },
    subtitle1: {
      fontFamily: 'Libre Franklin, sans-serif',
    },
    subtitle2: {
      fontFamily: 'Libre Franklin, sans-serif',
    },
    body2: {
      fontFamily: 'Libre Franklin, sans-serif',
    },
    body1: {
      fontFamily: 'Libre Franklin, sans-serif',
      lineHeight: '1.75',
    },
    caption: {
      fontFamily: 'Libre Franklin, sans-serif',
    },
    overline: {
      fontFamily: 'Amiri, serif',
      fontWeight: '700',
      fontStyle: 'italic',
      fontSize: '0.9rem',
    },
  },
  palette: {
    mode: 'dark',

    primary: {
      // main: '#42a0be',
      main: '#1c9bdb',
    },
    secondary: {
      // main: '#f82b79',
      main: '#fd224a',
    },
    success: {
      // main: '#00C49A',
      // main: '#136F63',
      main: '#7AE582',
    },
    warning: {
      // main: '#F0F757',
      // main: '#E0CA3C',
      main: '#FCAB10',
    },
    error: {
      main: '#E88EED',
    },
    info: {
      // main: '#E5FCFF',
      main: '#A9F0D1',
    },

    background: {
      // default: 'none',
      default: '#000F08',
      // paper:
      //   'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))',
    },
  },
});

const shadowColor = '255';
const componentTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    // MuiBackdrop: {
    //   styleOverrides: {
    //     root: {
    //       background: '#fff',
    //     },
    //   },
    // },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'transparent',
          backgroundImage: `radial-gradient(

            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0)
          )`,
          backdropFilter: 'blur(20px)',
          boxShadow: `${baseTheme.shadows[1].replace(
            /rgba\(0,0,0/gm,
            `rgba(${shadowColor},${shadowColor},${shadowColor}`
          )}`,
          border: `1px solid ${baseTheme.palette.divider}`,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          maxWidth: '700px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'transparent',
          backgroundImage: `radial-gradient(

            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0)
          )`,
          backdropFilter: 'blur(20px)',
          boxShadow: `${baseTheme.shadows[1].replace(
            /rgba\(0,0,0/gm,
            `rgba(${shadowColor},${shadowColor},${shadowColor}`
          )}`,
          border: `1px solid ${baseTheme.palette.divider}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'transparent',
          backgroundImage: `radial-gradient(

            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0)
          )`,
          backdropFilter: 'blur(10px)',
          // boxShadow: `${baseTheme.shadows[1].replace(
          //   /rgba\(0,0,0/gm,
          //   `rgba(${shadowColor},${shadowColor},${shadowColor}`
          // )}`,
          // border: `1px solid ${baseTheme.palette.divider}`,
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(
  createTheme(deepmerge(componentTheme, baseTheme))
);
// export default theme
