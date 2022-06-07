import { Router } from 'express';
import * as csrf from '@lib/csrf';

const router = Router();

router.route('/').get(async (req, res) => {
  const { token, secret } = csrf.generate();
  return res.json({ csrfToken: token, csrfSecret: secret });
});

export default router;
