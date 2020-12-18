
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./body-scroll-lock.cjs.production.min.js')
} else {
  module.exports = require('./body-scroll-lock.cjs.development.js')
}
