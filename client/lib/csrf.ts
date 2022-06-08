import { CookieNames } from '@ts-types/enums';
import axios from 'axios';
import Cookies from 'cookies';
import { GetServerSidePropsContext } from 'next';
import { apiURL } from '@utils/index';
import Tokens from 'csrf';

const ENV = process.env;
const PRODUCTION_ENV = ENV.NODE_ENV === 'production';

const tokens = new Tokens();

export default async function XSRFHandler(context: GetServerSidePropsContext) {
  const { req, res } = context;

  const cookies = new Cookies(req, res);

  let csrfToken: string | null = null;
  let csrfSecret: string | null = null;
  let csrfError: string | null = null;

  try {
    // generate & set new secret
    csrfSecret = tokens.secretSync();
    // create new token
    csrfToken = tokens.create(csrfSecret);

    // const res = await axios.get(`${apiURL}/getXsrfToken_f3503635c`);
    // csrfToken = res.data?.csrfToken;
    // csrfSecret = res.data?.csrfSecret;

    console.log('first :>', { csrfSecret, csrfToken });

    if (csrfSecret) {
      cookies.set(CookieNames.XSRF_TOKEN, csrfSecret, {
        httpOnly: true,
        maxAge: 5 * 60 * 60 * 1000, // 5 hours
        sameSite: 'strict',
        secure: PRODUCTION_ENV
      });
    }
  } catch (err) {
    csrfError = (err as Error).message;
  }

  return { csrfToken, csrfError };
}
