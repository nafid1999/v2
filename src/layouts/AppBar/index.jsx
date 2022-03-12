import React from 'react'
import { Button } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import NightlightIcon from '@mui/icons-material/Nightlight'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useUserPreferencesStore from '../../store/userPreferences'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    width: `calc(100% - calc(${theme.spacing(7)} + 1px))`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - calc(${theme.spacing(9)} + 1px))`,
    },
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export default function CustomAppBar() {
  const { navState, toggleTheme, theme } = useUserPreferencesStore()

  return (
    <AppBar position="fixed" open={navState} color="inherit" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button color="secondary" onClick={toggleTheme}>
          {theme === 'light' ? <Brightness4Icon /> : <NightlightIcon />}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
