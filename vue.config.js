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
        include: ['allAssets', 'main', 'home'],
      }),
    ],
  },

  chainWebpack: (config) => {
    config.devServer.hot(true);

    // config.devServer.clientLogLevel('silent');
    config.devServer.overlay({ warnings: true, errors: true });
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
