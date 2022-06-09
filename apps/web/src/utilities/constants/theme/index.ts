import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
    h5: {
      fontWeight: 'bold',
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: 'none',
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
