import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import LeftMenu from './LeftMenu'
import CustomAppBar from './AppBar'
import useUserPreferencesStore from '../store/userPreferences'

export default function Container({ children }) {
  const { lang } = useUserPreferencesStore()
  const { push, basePath } = useRouter()

  useEffect(() => {
    push(basePath, basePath, { locale: lang })
  }, [lang])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar />
      <LeftMenu />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  )
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
}
