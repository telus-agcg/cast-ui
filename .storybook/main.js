const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|js)'],
  addons: [
    'storybook-addon-styled-component-theme/dist/register',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions',
    'storybook-readme/register',
  ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, '../src'),
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            useCache: true,
            forceIsolatedModules: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            propFilter: prop => {
              return (
                prop.parent == null ||
                (prop.parent.name.indexOf('HTMLAttributes') < 0 &&
                  prop.parent.name.indexOf('DOMAttributes') < 0)
              );
            },
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
