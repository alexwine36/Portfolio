import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
  },
  palette: {
    mode: 'dark',

    primary: {
      main: '#311b92',
    },
    secondary: {
      main: '#6a1b9a',
    },

    background: {
      // default: 'none',
      // paper:
      //   'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))',
    },
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
          background:
            'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))',
        },
      },
    },
  },
});
