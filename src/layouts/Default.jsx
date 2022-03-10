import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Container } from '@mui/material'
import { useRouter } from 'next/router'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import NightlightIcon from '@mui/icons-material/Nightlight'
import { useLangStore, useThemeStore } from '../store/preferredParamsStore'

export default function DefaultLayout({ children }) {
  const { currentLang } = useLangStore()
  const { push, basePath } = useRouter()
  const { toggleTheme, theme } = useThemeStore()

  useEffect(() => {
    push(basePath, basePath, { locale: currentLang })
  }, [currentLang])

  return (
    <Container maxWidth="">
      <Button color="secondary" onClick={toggleTheme}>
        {theme === 'light' ? <Brightness4Icon /> : <NightlightIcon />}
      </Button>
      {children}
    </Container>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
