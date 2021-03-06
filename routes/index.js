const router = require('koa-router')()

const users = require('./users')
const info = require('./info')
const infos = require('./infos')
const disease = require('./disease')
const user = require('./user')
const report = require('./report')

router
  .use('/api', users.routes())
  .use('/api', user.routes())
  .use('/api', info.routes())
  .use('/api', infos.routes())
  .use('/api', disease.routes())
  .use('/api', report.routes())

module.exports = router
