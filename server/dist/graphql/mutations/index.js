"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const staff_1 = __importDefault(require("./staff"));
exports.default = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: Object.assign({}, staff_1.default),
});
//# sourceMappingURL=index.js.map