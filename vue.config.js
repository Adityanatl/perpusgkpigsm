module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.performance
        .maxEntrypointSize(400000000)
        .maxAssetSize(400000000)
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
