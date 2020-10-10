/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv';
import { resolve } from 'path';
import { readFileSync } from 'fs';

dotenv.config();

const isProduction = process.env.PRODUCTION === 'True';

export default {
  httpPort: isProduction
    ? process.env.HTTP_PORT!
    : process.env.DEBUG_HTTP_PORT!,
  httpsPort: isProduction
    ? process.env.HTTPS_PORT!
    : process.env.DEBUG_HTTPS_PORT!,
  serverOptions: {
    cert: readFileSync(resolve(__dirname, process.env.CERTIFICATE!)),
    key: readFileSync(resolve(__dirname, process.env.KEY!)),
    passphrase: process.env.PASSWORD!,
    allowHTTP1: process.env.ALLOW_HTTP === 'True'
  },
  staticRoot: resolve(__dirname, process.env.ROOT_DIR!)
};
