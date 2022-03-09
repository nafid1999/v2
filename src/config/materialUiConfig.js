import { createTheme } from '@mui/material/styles'
import { amber, deepOrange, grey } from '@mui/material/colors'

export const themes = ['light', 'dark']

const materialUiConfig = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === themes[0]
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            background: {
              default: 'white',
              paper: deepOrange[900],
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: 'black',
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  })

export default materialUiConfig
