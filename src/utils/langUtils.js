/* eslint-disable global-require */
const {
  serverSideTranslations,
} = require('next-i18next/serverSideTranslations')
const fs = require('fs')
const path = require('path')

export const setUpLangPages = async (locale) => {
  const files = fs.readdirSync('public/locales/fr')
  Array.prototype.push.apply(files, fs.readdirSync('public/locales/en'))

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        ...new Set(files.map((file) => path.parse(file).name)),
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default null
