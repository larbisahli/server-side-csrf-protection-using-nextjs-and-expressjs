import xsrfToken from './xsrf-token';
import { Application } from 'express';

const MountRoutes = (app: Application): void => {
  app.use('/getXsrfToken_f3503635c', xsrfToken);
};

export default MountRoutes;
