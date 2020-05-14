const Koa = require('koa');
const Router = require('koa-router');
const morgan = require('koa-morgan');

const app = new Koa();
const router = new Router();

const leak = [];

router.get('/users', ctx => {
  leak.push(Array.from({length: 1e6}, () => 0))
  ctx.body = {
    users: [
      {
        id: 42,
        name: 'name1',
        email: 'name1@email.com'
      }
    ]
  };
});

app.use(morgan('dev'));
app.use(router.middleware());

app.listen(process.env.NODE_PORT || 3000, '127.0.0.1');
