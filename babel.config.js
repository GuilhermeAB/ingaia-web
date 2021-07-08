module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      '@vue/cli-plugin-babel/preset',
    ],
    env: {
      development: {
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
        ],
      },
      production: {
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
        ],
      },
    },
  };
};
