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
                John Doe
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">Expert technique</Typography>
            </Grid>
          </Grid>

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="profil-account-menu"
            aria-haspopup="true"
            disableRipple
          >
            <AccountCircle sx={{ fontSize: 40 }} />
          </IconButton>
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
