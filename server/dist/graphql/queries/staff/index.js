"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const types_1 = require("@graphql/types");
const resolvers_1 = __importDefault(require("./resolvers"));
const resolvers = new resolvers_1.default();
const staffFields = {
    staff: {
        type: types_1.StaffType,
        args: {
            id: { type: graphql_1.GraphQLID },
        },
        resolve: resolvers.staff,
    }
};
exports.default = staffFields;
//# sourceMappingURL=index.js.map