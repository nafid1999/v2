import React from 'react'
import {
  Typography,
  Toolbar,
  Grid,
  ButtonBase,
  IconButton,
  Hidden,
  Tabs,
  Tab,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AccountCircle,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { useTranslation } from 'next-i18next'
import useUserPreferencesStore from '../../store/userPreferences'
import UserMenu from '../UserMenu'
import { useCurrentUser } from '../../backend'
import modules from './modules'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    width: `100%`,
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
  const { toggleNavState, navState } = useUserPreferencesStore()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const { data = {} } = useCurrentUser()
  const { t } = useTranslation('common')

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar position="fixed" open={navState} color="inherit" elevation={0}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Hidden smUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleNavState}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <Tabs
            value={0}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Module tabs"
            sx={{ marginTop: 'auto' }}
          >
            {modules.map(({ name }, index) => (
              <Tab label={t(name)} index={index} />
            ))}
          </Tabs>
        </Hidden>

        <ButtonBase onClick={handleProfileMenuOpen} sx={{ marginLeft: 'auto' }}>
          <Grid container direction="column">
            <Grid item>
              <Typography align="right" variant="button" component="div">
                {data.firstName} {data.lastName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="right" variant="caption" component="div">
                Expert technique
              </Typography>
            </Grid>
          </Grid>
          <AccountCircle sx={{ fontSize: 40, ml: 1 }} />
          {isMenuOpen ? (
            <KeyboardArrowUp sx={{ fontSize: 20 }} />
          ) : (
            <KeyboardArrowDown sx={{ fontSize: 20 }} />
          )}
        </ButtonBase>
        <UserMenu
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
        />
      </Toolbar>
    </AppBar>
  )
}
