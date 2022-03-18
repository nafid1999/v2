import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import NightlightIcon from '@mui/icons-material/Nightlight'
import useUserPreferencesStore from '../../store/userPreferences'

export default function UserMenu({ anchorEl, isMenuOpen, handleMenuClose }) {
  const { toggleTheme, theme } = useUserPreferencesStore()

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
      <MenuItem>
        <Link href="/Account">Account</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/Account/ChangePassword">Change Password</Link>
      </MenuItem>

      <MenuItem>
        <Link href="/Logout">Log Out</Link>
      </MenuItem>
      <MenuItem>
        <Button color="secondary" onClick={toggleTheme}>
          {theme === 'light' ? <Brightness4Icon /> : <NightlightIcon />}
        </Button>
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
