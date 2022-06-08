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
    createStaff: {
        type: types_1.StaffType,
        args: {
            first_name: { type: graphql_1.GraphQLString },
            last_name: { type: graphql_1.GraphQLString },
            phone_number: { type: graphql_1.GraphQLString },
            email: { type: graphql_1.GraphQLString },
            password: { type: graphql_1.GraphQLString },
        },
        resolve: resolvers.createStaff,
    },
};
exports.default = staffFields;
//# sourceMappingURL=index.js.map