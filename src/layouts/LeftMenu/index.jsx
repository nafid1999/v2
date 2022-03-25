import React from 'react'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Hidden } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import logo from './logo.png'
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
  width: `0`,
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
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    height: '100vh',
  },
}))

export default function LeftMenu() {
  const { toggleNavState, navState } = useUserPreferencesStore()
  const { asPath } = useRouter()

  return (
    <Drawer variant="permanent" open={navState}>
      <Link href="/" passHref>
        <Box component="a" p={1} width="73px">
          <Image src={logo} alt="logo" />
        </Box>
      </Link>
      <List sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
        {menu.map(({ url, text, Icon }) => {
          const selected = url === asPath
          return (
            <ListItemButton
              key={text}
              selected={selected}
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
          )
        })}
      </List>
      <Hidden smDown>
        <IconButton
          sx={{
            width: '50px',
            height: '50px',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
          onClick={toggleNavState}
        >
          {!navState ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Hidden>
    </Drawer>
  )
}
