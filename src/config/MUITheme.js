import { createTheme } from '@mui/material/styles'
import { amber, deepOrange, grey } from '@mui/material/colors'

export const themes = ['light', 'dark']

export const lightTheme = createTheme({
  palette: {
    mode: themes[0],
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
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: themes[1],
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
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',
        },
      },
    },
  },
})
