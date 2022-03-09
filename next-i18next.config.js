const { defaultLang, langs } = require('./src/config/langConfig')

module.exports = {
  i18n: {
    defaultLocale: defaultLang,
    locales: langs,
    localeDetection: false,
  },
  trailingSlash: true,
}
