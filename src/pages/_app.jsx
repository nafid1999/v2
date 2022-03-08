import React from 'react'
import '../../styles/globals.css'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

function Novy({ Component, pageProps }) {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...pageProps} />
}

Novy.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default dynamic(() => Promise.resolve(Novy), {
  ssr: false,
})
