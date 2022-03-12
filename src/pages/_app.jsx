import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import { appWithTranslation } from 'next-i18next'
import getMUITheme from '../config/MUITheme'
import useUserPreferencesStore from '../store/userPreferences'
import Container from '../layouts'
import '../../styles/globals.css'

function Novy({ Component, pageProps }) {
  const { theme } = useUserPreferencesStore()

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <ThemeProvider theme={getMUITheme(theme)}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

Novy.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default appWithTranslation(Novy)
