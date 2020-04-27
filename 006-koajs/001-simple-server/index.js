const fs = require('fs');
const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  // ctx.req -> http.IncomingMessage
  // ctx.request -> koa.Request

  // console.log('url: ', ctx.request.url);
  // console.log('query: ', ctx.request.querystring);
  // console.log('path: ', ctx.request.path);
  // console.log('query params', ctx.request.query);
  // console.log('method: ', ctx.request.method);
  // console.log('headers: ', ctx.request.headers); //ctx.header
  // ctx.throw(401);
  // switch (ctx.accepts('json', 'html', 'text')) {
  //   case 'json':
  //     break;
  //   case 'html':
  //     break;
  //   case 'text':
  //     break;
  //   default:
  //     ctx.throw(406, 'json, html, or text only');
  // }

  // ctx.res -> http.ServerResponse
  // ctx.response -> koa.Response

  // ctx.response.body = 'Hello world'; // res.send
  // ctx.response.body = fs.createReadStream('./package.json');
  // ctx.response.body = Buffer.from('asdfasfd')
  // ctx.response.body = {
  //   foo: 'bar'
  // };
  ctx.body = {foo: 'bar'};

  // ctx.response.set('content-type', 'application/json');
  // ctx.response.set('x-content-type', 'application/json');
  // ctx.cookies.set('my-cookie', 'test', {signed: false});
  // ctx.status = 201;
  // ctx.response.status = 201;
  // ctx.throw(404, 'Resource not found', {resource: 'user'});
  // ctx.response.redirect('https://google.com')
});

app.listen(3000, () => {
  console.log('Server started');
});
