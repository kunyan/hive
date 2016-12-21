import Router from 'koa-router';
import program from './program.router';

const router = new Router();

router.use(program.routes());

export default router;
