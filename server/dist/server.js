"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_graphql_1 = require("express-graphql");
const index_1 = __importDefault(require("@graphql/index"));
const helmet_1 = __importDefault(require("helmet"));
const debug_1 = __importDefault(require("debug"));
const error_handler_1 = require("@utils/error-handler");
const csrf_1 = require("@lib/csrf");
const ENV = process.env;
const PRODUCTION_ENV = ENV.NODE_ENV === 'production';
const app = (0, express_1.default)();
const Debug = (0, debug_1.default)('http');
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
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
}));
//  Size of payload
app.use(express_1.default.json({ limit: '16mb' }));
app.use(express_1.default.urlencoded({ limit: '16mb', extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, helmet_1.default)({
    contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
}));
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)((request, response) => ({
    schema: index_1.default,
    context: {
        req: request,
        res: response,
        csrf: { verify: csrf_1.verify },
        ip: request.headers['x-forwarded-for'],
    },
    graphiql: !PRODUCTION_ENV,
    customFormatErrorFn: (err) => {
        var _a;
        try {
            const customError = JSON.parse(err.message);
            return Object.assign({ error: customError === null || customError === void 0 ? void 0 : customError.error, message: customError === null || customError === void 0 ? void 0 : customError.message, from: customError === null || customError === void 0 ? void 0 : customError.from, meta: customError === null || customError === void 0 ? void 0 : customError.meta }, ((_a = (0, error_handler_1.getErrorCode)(customError.type)) !== null && _a !== void 0 ? _a : {}));
        }
        catch (error) {
            return Object.assign(Object.assign({}, err), error);
        }
    },
})));
const PORT = 5000;
const server = app.listen(PORT, function () {
    Debug(`Express Server started on port ${PORT}`);
});
exports.default = server;
//# sourceMappingURL=server.js.map