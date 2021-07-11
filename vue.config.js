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
        as: function (entry) {
          if (/\.css$/.test(entry)) return 'style';
          if (/\.scss$/.test(entry)) return 'style';
          if (/\.sass$/.test(entry)) return 'style';
          if (/\.png$/.test(entry)) return 'image';
          return 'script';
        },
        include: ['main', 'home'],
      }),
    ],
  },

  chainWebpack: (config) => {
    config.devServer.hot(true);

    config.devServer.overlay({ warnings: true, errors: true });

    config.module
      .rule('file-loader')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .end();
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
