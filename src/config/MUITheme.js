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
  })
