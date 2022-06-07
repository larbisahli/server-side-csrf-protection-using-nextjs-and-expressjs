"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffRefType = exports.StaffType = void 0;
const graphql_1 = require("graphql");
const GraphQLTimestamp_1 = __importDefault(require("./GraphQLTimestamp"));
exports.StaffType = new graphql_1.GraphQLObjectType({
    name: 'staff_account',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        first_name: { type: graphql_1.GraphQLString },
        last_name: { type: graphql_1.GraphQLString },
        phone_number: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        active: { type: graphql_1.GraphQLBoolean },
        created_at: { type: GraphQLTimestamp_1.default },
        updated_at: { type: GraphQLTimestamp_1.default },
        created_by: { type: exports.StaffRefType },
        updated_by: { type: exports.StaffRefType },
    }),
});
// --------------------------- REFERENCES ---------------------------
exports.StaffRefType = new graphql_1.GraphQLObjectType({
    name: 'staffRef',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        first_name: { type: graphql_1.GraphQLString },
        last_name: { type: graphql_1.GraphQLString },
    }),
});
//# sourceMappingURL=index.js.map