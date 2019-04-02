import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';

import pkg from './package.json';

const config = {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'es',
  },
  external: ['React', 'ReactDOM', 'styled-components'],
  plugins: [
    postcss({ extract: false, plugins: [autoprefixer] }),
    babel({ exclude: 'node_modules/**' }),
    peerDepsExternal(),
    localResolve(),
    resolve(),
    filesize(),
    typescript({
      typescript: require('typescript'),
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    commonjs(),
  ],
};

export default config;
