import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import { appWithTranslation } from 'next-i18next'
import { QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import {
  SSRKeycloakProvider,
  SSRCookies,
  useKeycloak,
} from '@react-keycloak/ssr'
import cookie from 'cookie'
import getMUITheme from '../config/MUITheme'
import useUserPreferencesStore from '../store/userPreferences'
import Container from '../layouts'
import useQueryClient from '../config/ReactQuery/queryClient'

import '../../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

const keycloakCfg = {
  realm: 'novelis',
  url: 'http://rec-auth.novelis.io/auth/',
  clientId: 'novyclient',
}

const initOptions = {
  onLoad: 'login-required',
  promiseType: 'native',
  checkLoginIframe: false,
  responseMode: 'query',
}

function Main({ Component, pageProps }) {
  const { theme } = useUserPreferencesStore()
  const { keycloak } = useKeycloak()
  return (
    <ThemeProvider theme={getMUITheme(theme)}>
      <Container>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {keycloak?.authenticated ? <Component {...pageProps} /> : null}
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </ThemeProvider>
  )
}
Main.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
}
function Novy({ Component, pageProps, cookies }) {
  const queryClient = useQueryClient()

  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakCfg}
      persistor={SSRCookies(cookies)}
      initOptions={initOptions}
    >
      <QueryClientProvider client={queryClient}>
        <Main pageProps={pageProps} Component={Component} />
      </QueryClientProvider>
    </SSRKeycloakProvider>
  )
}

const parseCookies = (req) => {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}

Novy.getInitialProps = async (context) => ({
  cookies: parseCookies(context?.ctx?.req),
})

Novy.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  cookies: PropTypes.any.isRequired,
}

export default appWithTranslation(Novy)
