"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const language_1 = require("graphql/language");
const graphql_1 = require("graphql");
function serializeDate(value) {
    if (value instanceof Date) {
        return value.getTime();
    }
    else if (typeof value === 'number') {
        return Math.trunc(value);
    }
    else if (typeof value === 'string') {
        return Date.parse(value);
    }
    return null;
}
function parseDate(value) {
    if (value === null) {
        return null;
    }
    try {
        return new Date(value);
    }
    catch (err) {
        return null;
    }
}
function parseDateFromLiteral(ast) {
    if (ast.kind === language_1.Kind.INT) {
        const num = parseInt(ast.value, 10);
        return new Date(num);
    }
    else if (ast.kind === language_1.Kind.STRING) {
        return parseDate(ast.value);
    }
    return null;
}
const TimestampType = new graphql_1.GraphQLScalarType({
    name: 'Timestamp',
    description: 'The javascript `Date` as integer. Type represents date and time ' +
        'as number of milliseconds from start of UNIX epoch.',
    serialize: serializeDate,
    parseValue: parseDate,
    parseLiteral: parseDateFromLiteral,
});
exports.default = TimestampType;
//# sourceMappingURL=GraphQLTimestamp.js.map