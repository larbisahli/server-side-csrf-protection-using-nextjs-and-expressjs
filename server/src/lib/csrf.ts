import { CookieNames, ErrorNames } from '@interfaces/enums';
import Tokens from 'csrf';
import { Request } from 'express';
import { ErrorType } from '@interfaces/index';

const tokens = new Tokens();

export function verify(req: Request) {
  const cookies = req.cookies;
  const secret = cookies[CookieNames.XSRF_TOKEN];
  const token = defaultValue(req);

  if (!tokens.verify(secret, token)) {
    throw new Error(
      stringifyError({
        type: ErrorNames.INVALID_CSRF_TOKEN,
        error: {
          message: 'invalid csrf token',
          code: 'EBADCSRFTOKEN',
          name: '',
        },
        message: 'invalid csrf token',
        from: 'csrfVerify',
        meta: { token, secret },
      })
    );
  }
}

function defaultValue(req: Request) {
  return (
    (req.body && req.body._csrf) ||
    (req.query && req.query._csrf) ||
    req.headers['csrf-token'] ||
    req.headers['xsrf-token'] ||
    req.headers['x-csrf-token'] ||
    req.headers['x-xsrf-token']
  );
}

const stringifyError = (error: ErrorType) => {
  return JSON.stringify(error);
};
