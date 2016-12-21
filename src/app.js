import Koa from 'koa';
import helmet from 'koa-helmet';

import router from './routers';

const app = new Koa();

app
  .use(helmet())
  .use(router.routes());

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(8080);
