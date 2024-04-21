'use strict'

import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const PATHS = {
  static: resolve(__dirname, '../priv/static'),
}

export default PATHS
