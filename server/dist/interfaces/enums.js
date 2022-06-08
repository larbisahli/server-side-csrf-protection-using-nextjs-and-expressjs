"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieNames = exports.ErrorNames = void 0;
var ErrorNames;
(function (ErrorNames) {
    ErrorNames["SERVER_ERROR"] = "SERVER_ERROR";
    ErrorNames["PERMISSION_DENIED"] = "PERMISSION_DENIED";
    ErrorNames["SOMETHING_HAPPENED"] = "SOMETHING_HAPPENED";
    ErrorNames["BAD_REQUEST"] = "BAD_REQUEST";
    ErrorNames["FORBIDDEN"] = "FORBIDDEN";
    ErrorNames["INCORRECT_PASSWORD"] = "INCORRECT_PASSWORD";
    ErrorNames["USER_NOT_FOUND"] = "USER_NOT_FOUND";
    ErrorNames["USER_NOT_ACTIVE"] = "USER_NOT_ACTIVE";
    ErrorNames["INVALID_CSRF_TOKEN"] = "INVALID_CSRF_TOKEN";
})(ErrorNames = exports.ErrorNames || (exports.ErrorNames = {}));
var CookieNames;
(function (CookieNames) {
    CookieNames["XSRF_TOKEN"] = "XSRF_TOKEN";
})(CookieNames = exports.CookieNames || (exports.CookieNames = {}));
//# sourceMappingURL=enums.js.map