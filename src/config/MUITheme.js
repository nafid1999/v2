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
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1270,
        lg: 1200,
        xl: 1536,
        small_md: 1316,
      },
    },
  })
