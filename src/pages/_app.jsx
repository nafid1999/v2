import React from 'react'
import '../../styles/globals.css'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import { appWithTranslation } from 'next-i18next'
import { darkTheme, lightTheme } from '../config/MUITheme'
import NoSsr from '../components/global/NoSsr'
import { useThemeStore } from '../store/preferredParamsStore'
import DefaultLayout from '../layouts/Default'

function Novy({ Component, pageProps }) {
  const { theme } = useThemeStore()

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <NoSsr>
      <ThemeProvider
        theme={darkTheme.palette.mode === theme ? darkTheme : lightTheme}
      >
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </NoSsr>
  )
}

Novy.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default appWithTranslation(Novy)
