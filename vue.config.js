const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

module.exports = {
  publicPath: '',
  transpileDependencies: [
    'vuetify',
  ],

  configureWebpack: {
    plugins: [
      new PreloadWebpackPlugin({
        rel: 'preload',
        as: 'style',
        include: 'allAssets',
      }),
    ],
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
