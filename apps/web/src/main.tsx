import { CssBaseline, ThemeProvider } from '@mui/material';
import { GlobalStyles } from '@mui/styled-engine';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { theme } from './utilities/constants/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles
        styles={{
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            backgroundImage: 'url(https://nextui.org/theming-gradient.svg)',
            backgroundColor: '#000',
          },
        }}
      />
      <CssBaseline />

      <App />
    </>
  </ThemeProvider>
);
