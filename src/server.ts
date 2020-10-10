import chalk from 'chalk';
import { createSecureServer } from 'http2';
import { createServer } from 'http';
import Koa from 'koa';
import config from './config';
import * as loaders from './loaders';

const app = new Koa();

loaders.init(app);

createSecureServer(config.serverOptions, app.callback()).listen(
  config.httpsPort,
  () => {
    console.log(
      chalk.bgGreen.black(
        `HTTPS server started listening on port ${config.httpsPort}`
      )
    );
  }
);

createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(config.httpPort, () => {
  console.log(
    chalk.bgBlue.white(
      `HTPP server started listening on port ${config.httpPort}`
    )
  );
});
