const Koa = require('koa');
const cors = require('@koa/cors')

const app = new Koa();

app.use(cors({
  origin: 'localhost:3000'
}));

// 1
app.use(async (ctx, next) => {
  const {method, url} = ctx;
  const start = Date.now(); // process.hrtime => [ms, ns]

  await next()

  console.log(`${method} ${url} ${Date.now() - start}ms`);
})

// 2
app.use(async (ctx, next) => {
  if (ctx.query.login === 'admin') {
    return next()
  }
  ctx.throw(401);
})

// 3
app.use(async (ctx, next) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  ctx.body = {'hello': 'world'};
  ctx.status = 200;
  return next();
});

// req -> 1 -> 2 -> 3 (res) -> 2 -> 1

app.listen(3000);
