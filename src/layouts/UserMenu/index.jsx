import React from 'react'
import {
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { AccountCircle, LockOpen, Logout } from '@mui/icons-material'
import NightlightIcon from '@mui/icons-material/Nightlight'
import useUserPreferencesStore from '../../store/userPreferences'
import { useCurrentUser } from '../../backend'

export default function UserMenu({ anchorEl, isMenuOpen, handleMenuClose }) {
  const { toggleTheme, theme } = useUserPreferencesStore()
  const { data = {} } = useCurrentUser()

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id="profil-account-menu"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ pt: 1, pb: 1, minWidth: 300 }}
      >
        <Grid item xs="auto">
          <AccountCircle sx={{ fontSize: 60 }} />
        </Grid>
        <Grid item xs="auto">
          <Typography align="right" variant="button" component="div">
            {data.firstName} {data.lastName}
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Typography align="right" variant="caption" component="div">
            Expert Technique
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <IconButton color="secondary" onClick={toggleTheme}>
            {theme === 'light' ? <Brightness4Icon /> : <NightlightIcon />}
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{ mb: 1, mt: 1 }} />
      <MenuItem>
        <ListItemIcon>
          <LockOpen fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <Link href="/Account/ChangePassword">Change Password</Link>
        </ListItemText>
      </MenuItem>
      <Divider />

      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <Link href="/Logout">Log Out</Link>
        </ListItemText>
      </MenuItem>
    </Menu>
  )
}

UserMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  anchorEl: PropTypes.any,
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
}

UserMenu.defaultProps = {
  anchorEl: null,
}
