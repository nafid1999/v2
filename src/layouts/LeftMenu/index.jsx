import React from 'react'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import useUserPreferencesStore from '../../store/userPreferences'
import menu from './menu'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  color: 'primary',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function LeftMenu() {
  const { toggleNavState, navState } = useUserPreferencesStore()

  return (
    <Drawer variant="permanent" open={navState}>
      <List>
        {menu.map(({ url, text, Icon }) => (
          <ListItemButton
            key={text}
            href={url}
            sx={{
              minHeight: 48,
              justifyContent: navState ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: navState ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Icon color="primary" />
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: navState ? 1 : 0 }} />
          </ListItemButton>
        ))}
      </List>
      <IconButton
        sx={{ width: '50px', height: '50px' }}
        onClick={toggleNavState}
      >
        {!navState ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </Drawer>
  )
}
