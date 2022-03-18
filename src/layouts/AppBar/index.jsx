import React from 'react'
import {
  IconButton,
  Typography,
  Toolbar,
  Grid,
  ButtonBase,
} from '@mui/material'
import {
  AccountCircle,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import useUserPreferencesStore from '../../store/userPreferences'
import UserMenu from '../UserMenu'
import { useCurrentUser } from '../../backend'

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
  const { navState } = useUserPreferencesStore()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const { data = {} } = useCurrentUser()

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="fixed" open={navState} color="inherit" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ButtonBase onClick={handleProfileMenuOpen}>
          <Grid container direction="column" xs="auto">
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
