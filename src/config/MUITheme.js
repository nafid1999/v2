import { createTheme } from '@mui/material/styles'

export default (theme) =>
  createTheme({
    palette: {
      mode: theme,
      primary: {
        main: '#FF067E',
      },
      secondary: {
        main: '#303167',
      },
      background: {
        default: theme === 'dark' ? '#252525' : '#F8F8F8',
      },
    },
    typography: {
      button: {
        textTransform: 'none',
      },
      h5: {
        fontSize: '23px',
        color: 'gray',
      },
      body: {
        fontSize: '20px',
      },
      subtitle1: {
        fontSize: '14px',
        fontWeight: 'bold',
      },
      h6: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '26px',
        fontWeight: 'bold',
      },
      h7: {
        fontSize: '18px',
        fontWeight: '500',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 830,
        md: 1270,
        lg: 1200,
        xl: 1536,
        small_md: 1316,
      },
    },
  })
