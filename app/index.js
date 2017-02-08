import Koa from 'koa';
import helmet from 'koa-helmet';
import cors from 'koa-cors';
import loggerMiddleware from 'koa-bunyan-logger';
import logger from './logger';
import router from './routers';

const app = new Koa();
const port = 8080;

app
  .use(helmet())
  .use(cors())
  .use(loggerMiddleware(logger))
  .use(router.routes());

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

if (!module.parent) {
  app.listen(port);
  logger.info('Server listen ' + port);
}

export default app;