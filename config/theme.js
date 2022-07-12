import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Ubuntu',
      'Helvetica Neue',
    ].join(','),
    h6: {
      fontFamily: [
        'Poppins',
        'Roboto',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Ubuntu',
        'Helvetica Neue',
      ].join(','),
      fontWeight: 500,
      fontSize: '1.1rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00B4D8',
      dark: '#1A2849',
    },
    secondary: {
      main: '#9631f7',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#151D3B',
      default: '#151D3B',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
