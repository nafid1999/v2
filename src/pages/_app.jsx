import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import { appWithTranslation } from 'next-i18next'
import { QueryClientProvider } from 'react-query'
import { ToastContainer, Zoom, Bounce } from 'react-toastify'

import getMUITheme from '../config/MUITheme'
import useUserPreferencesStore from '../store/userPreferences'
import Container from '../layouts'
import useQueryClient from '../config/ReactQuery/queryClient'

import '../../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

function Novy({ Component, pageProps }) {
  const { theme } = useUserPreferencesStore()
  const queryClient = useQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={getMUITheme(theme)}>
        <Container>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
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
    </QueryClientProvider>
  )
}

Novy.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default appWithTranslation(Novy)
