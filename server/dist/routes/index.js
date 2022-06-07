"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xsrf_token_1 = __importDefault(require("./xsrf-token"));
const MountRoutes = (app) => {
    app.use('/getXsrfToken_f3503635c', xsrf_token_1.default);
};
exports.default = MountRoutes;
//# sourceMappingURL=index.js.map