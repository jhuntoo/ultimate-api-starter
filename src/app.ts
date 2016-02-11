/// reference path="../typings/main.d.ts" /

import * as express from 'express';
import * as passport from 'passport';
//import * as process from 'process';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
//import connectMultiparty from 'connect-multiparty';
//import session from 'express-session/express-session';
import User from './models/user';
import {log} from 'winston';

export default class App {

  constructor() {

  }

  async start() {
    log.info('start');
    //await action('start');
    log.info('started');
  }

  displayInfoEnv() {
    log.info(`NODE_ENV: ${process.env.NODE_ENV}`);
    if (process.env.NODE_CONFIG) {
      log.info('NODE_CONFIG is set');
    }
    log.info(`USER: ${process.env.USER}`);
    log.info(`PWD: ${process.env.PWD}`);
  }
}

//const app = express();
//export default app;
//
//app.use(bodyParser());
//app.use(connectMultiparty());
//app.use(cookieParser());
//app.use(session({ secret: 'super-secret' }));
//app.use(passport.initialize());
//app.use(passport.session());
//passport.use(User.createStrategy());
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());
