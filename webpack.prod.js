const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  entry: {
    'cast-ui': './src/index.ts',
    'cast-ui.min': './src/index.ts',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'cast-ui',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
  externals: {
    react: {
      root: 'React',
      amd: 'react',
      commonjs2: 'react',
      commonjs: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
  },
});
