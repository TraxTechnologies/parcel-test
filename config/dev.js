import resolve from 'rollup-plugin-node-resolve';
import nodent from 'rollup-plugin-nodent';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: [
    'react'
  ],
  plugins: [
    nodent({
      noRuntime: true,
      promises: true,
      transformations: {
        forOf: false
      },
      parser: {
        plugins: {
          jsx: require('acorn-jsx')
        }
      }
    }),
    buble({
      transforms: {
        dangerousForOf: true,
        dangerousTaggedTemplateString: true
      }
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve()
  ],
  sourcemap: true
}