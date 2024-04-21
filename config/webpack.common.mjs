'use strict'

import WebpackObfuscator from 'webpack-obfuscator'
import PATHS from './paths.mjs'

const IMAGE_TYPES = /\.(png|jpe?g|gif|svg)$/i

// Webpack configuration.
const common = {
  output: {
    // The build folder to output bundles and assets in.
    path: PATHS.static,
    // The filename template for entry chunks.
    filename: '[name].mjs',
  },
  stats: {
    all: false,
    errors: true,
    builtAt: true,
    assets: true,
    excludeAssets: [IMAGE_TYPES],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        exclude: [
          PATHS.static,
        ],
        enforce: 'post',
        use: {
          loader: WebpackObfuscator.loader,
          options: {
            rotateStringArray: true
          }
        }
      },
    ],
  },
  plugins: [
    new WebpackObfuscator({
      rotateStringArray: true
    }, ['[name].mjs']),
  ],
}

export default common
