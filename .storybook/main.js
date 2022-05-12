const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.js',
    '../src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    'storybook-addon-styled-component-theme/dist/preset',
    '@storybook/addon-viewport',
    '@storybook/addon-postcss',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
