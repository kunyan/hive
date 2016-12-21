import Router from 'koa-router';

const router = new Router();
router.prefix('/api/programs');

router.get('/', async(ctx, next) => {
  await next();
  ctx.body = 'Get Programs';

});

router.get('/:id', async(ctx, next) => {
  await next();
  ctx.body = 'Hello ' + ctx.params.id;
});

router.post('/', async(ctx, next) => {
  await next();
  ctx.body = 'Post Program';
});

router.put('/:id', async(ctx, next) => {
  await next();
  ctx.body = 'Put Program';
});

router.del('/:id', async(ctx, next) => {
  await next();
  ctx.body = 'Delete Program';
});

export default router;
