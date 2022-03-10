/* eslint-disable global-require */
const {
  serverSideTranslations,
} = require('next-i18next/serverSideTranslations')
const fs = require('fs')
const path = require('path')

export const setUpLangPages = async (locale) => {
  const localesPath = 'public/locales'
  const folders = fs.readdirSync(localesPath)
  const files = []

  folders.forEach((folder) => {
    Array.prototype.push.apply(
      files,
      fs.readdirSync(`${localesPath}/${folder}`),
    )
  })

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
