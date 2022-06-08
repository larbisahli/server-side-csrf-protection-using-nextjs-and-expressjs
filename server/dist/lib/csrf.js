"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = void 0;
const enums_1 = require("@interfaces/enums");
const csrf_1 = __importDefault(require("csrf"));
const tokens = new csrf_1.default();
function verify(req) {
    const cookies = req.cookies;
    const secret = cookies[enums_1.CookieNames.XSRF_TOKEN];
    const token = defaultValue(req);
    if (!tokens.verify(secret, token)) {
        throw new Error(stringifyError({
            type: enums_1.ErrorNames.INVALID_CSRF_TOKEN,
            error: {
                message: 'invalid csrf token',
                code: 'EBADCSRFTOKEN',
                name: '',
            },
            message: 'invalid csrf token',
            from: 'csrfVerify',
            meta: { token, secret },
        }));
    }
}
exports.verify = verify;
function defaultValue(req) {
    return ((req.body && req.body._csrf) ||
        (req.query && req.query._csrf) ||
        req.headers['csrf-token'] ||
        req.headers['xsrf-token'] ||
        req.headers['x-csrf-token'] ||
        req.headers['x-xsrf-token']);
}
const stringifyError = (error) => {
    return JSON.stringify(error);
};
//# sourceMappingURL=csrf.js.map