import Koa from 'koa';
import koaLoader from './koaLoader';

export async function init(app: Koa) {
  await koaLoader(app);
}
