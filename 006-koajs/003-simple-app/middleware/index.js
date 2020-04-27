const router = require('./routing');
const bodyParser = require('koa-bodyparser');

module.exports = (app) => {
  app.use(bodyParser());
  app.use(router.middleware());
}
