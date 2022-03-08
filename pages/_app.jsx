import React from 'react'
import '../styles/globals.css'
import PropTypes from 'prop-types'

function MyApp({ Component, pageProps }) {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.element.isRequired,
}

export default MyApp
