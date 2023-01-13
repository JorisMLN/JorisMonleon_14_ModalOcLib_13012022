import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    json(), 
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-react'
      ]
    }),
    postcss(
      {
        extract: false,
        modules: false,
        use: [
          'sass'
        ]
      }
    )
  ]
};