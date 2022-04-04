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
