"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorType = exports.getErrorCode = void 0;
const enums_1 = require("@interfaces/enums");
const getErrorCode = (errorName) => {
    return Object.assign(Object.assign({}, exports.errorType[errorName]), { type: errorName });
};
exports.getErrorCode = getErrorCode;
exports.errorType = {
    [enums_1.ErrorNames.PERMISSION_DENIED]: {
        t: 'PERMISSION-DENIED',
        statusCode: 403,
    },
    [enums_1.ErrorNames.SERVER_ERROR]: {
        t: 'SERVER-ERROR',
        statusCode: 500,
    },
    [enums_1.ErrorNames.SOMETHING_HAPPENED]: {
        t: 'SOMETHING-HAPPENED',
        statusCode: 500,
    },
    [enums_1.ErrorNames.BAD_REQUEST]: {
        t: 'BAD-REQUEST',
        statusCode: 400,
    },
    [enums_1.ErrorNames.FORBIDDEN]: {
        t: 'FORBIDDEN',
        statusCode: 403,
    },
    [enums_1.ErrorNames.INCORRECT_PASSWORD]: {
        t: 'INCORRECT-PASSWORD',
        statusCode: 403,
    },
    [enums_1.ErrorNames.USER_NOT_FOUND]: {
        t: 'USER-NOT-FOUND',
        statusCode: 400,
    },
    [enums_1.ErrorNames.USER_NOT_ACTIVE]: {
        t: 'USER-NOT-ACTIVE',
        statusCode: 400,
    },
    [enums_1.ErrorNames.INVALID_CSRF_TOKEN]: {
        t: 'INVALID-CSRF-TOKEN',
        statusCode: 403,
    },
};
//# sourceMappingURL=error-handler.js.map