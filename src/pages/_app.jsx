import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import { appWithTranslation } from 'next-i18next'
import { QueryClientProvider } from 'react-query'

import getMUITheme from '../config/MUITheme'
import useUserPreferencesStore from '../store/userPreferences'
import Container from '../layouts'
import '../../styles/globals.css'
import useQueryClient from '../config/ReactQuery/queryClient'

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
      </ThemeProvider>
    </QueryClientProvider>
  )
}

Novy.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default appWithTranslation(Novy)
