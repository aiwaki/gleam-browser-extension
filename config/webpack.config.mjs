'use strict'

import { merge } from 'webpack-merge'

import common from './webpack.common.mjs'
import PATHS from './paths.mjs'

// Merge webpack configuration files.
const config = (env, argv) =>
  merge(common, {
    entry: {
      app: PATHS.static + '/app.mjs',
    },
    devtool: argv.mode === 'production' ? false : 'source-map',
  })

export default config
