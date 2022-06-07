import { ErrorNames } from '@interfaces/enums';

export const getErrorCode = (errorName: ErrorNames) => {
  return { ...errorType[errorName], type: errorName };
};

export const errorType = {
  [ErrorNames.PERMISSION_DENIED]: {
    t: 'PERMISSION-DENIED',
    statusCode: 403,
  },
  [ErrorNames.SERVER_ERROR]: {
    t: 'SERVER-ERROR',
    statusCode: 500,
  },
  [ErrorNames.SOMETHING_HAPPENED]: {
    t: 'SOMETHING-HAPPENED',
    statusCode: 500,
  },
  [ErrorNames.BAD_REQUEST]: {
    t: 'BAD-REQUEST',
    statusCode: 400,
  },
  [ErrorNames.FORBIDDEN]: {
    t: 'FORBIDDEN',
    statusCode: 403,
  },
  [ErrorNames.INCORRECT_PASSWORD]: {
    t: 'INCORRECT-PASSWORD',
    statusCode: 403,
  },
  [ErrorNames.USER_NOT_FOUND]: {
    t: 'USER-NOT-FOUND',
    statusCode: 400,
  },
  [ErrorNames.USER_NOT_ACTIVE]: {
    t: 'USER-NOT-ACTIVE',
    statusCode: 400,
  },
  [ErrorNames.INVALID_CSRF_TOKEN]: {
    t: 'INVALID-CSRF-TOKEN',
    statusCode: 403,
  },
};
