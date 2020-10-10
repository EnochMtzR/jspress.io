import Koa from 'koa';
import serve from 'koa-static-server';
import config from '../config';

export default async (app: Koa) => {
  app.use(serve({ rootDir: config.staticRoot }));
};
