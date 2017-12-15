import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

import config from './dev'

config.output.file = 'build/app.min.js'
config.plugins[1] = replace({ 'process.env.NODE_ENV': JSON.stringify('production') })
config.plugins.push(uglify())

export default config