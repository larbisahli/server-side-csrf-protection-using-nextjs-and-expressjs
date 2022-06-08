import 'module-alias/register';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { graphqlHTTP } from 'express-graphql';
import schema from '@graphql/index';
import helmet from 'helmet';
import type { ErrorType } from './interfaces';
import debug from 'debug';

import { getErrorCode } from '@utils/error-handler';
import { ErrorNames } from '@interfaces/enums';
import { verify } from '@lib/csrf';

const ENV = process.env;
const PRODUCTION_ENV = ENV.NODE_ENV === 'production';

const app: Application = express();

const Debug = debug('http');

Debug('booting %o', 'Express server');

app.set('trust proxy', true);

app.disable('x-powered-by');

// Should be first
// Get from the whitelist from redis ENV
const whitelist = [
  'http://127.0.0.1:5000',
  'http://127.0.0.1:3001',
  'http://127.0.0.1:3000',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//  Size of payload
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ limit: '16mb', extended: true }));

app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === 'production' ? undefined : false,
  })
);

app.use(
  '/graphql',
  graphqlHTTP((request: Request, response: Response) => ({
    schema,
    context: {
      req: request,
      res: response,
      csrf: { verify },
      ip: request.headers['x-forwarded-for'],
    },
    graphiql: !PRODUCTION_ENV,
    customFormatErrorFn: (err: Error) => {
      try {
        const customError = JSON.parse(err.message) as ErrorType;
        return {
          error: customError?.error,
          message: customError?.message,
          from: customError?.from,
          meta: customError?.meta,
          ...(getErrorCode(customError.type as ErrorNames) ?? {}),
        };
      } catch (error) {
        return { ...err, ...error };
      }
    },
  }))
);

const PORT = 5000;

const server = app.listen(PORT, function () {
  Debug(`Express Server started on port ${PORT}`);
});

export default server;
