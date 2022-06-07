import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';
import TimestampType from './GraphQLTimestamp';

export const StaffType = new GraphQLObjectType({
  name: 'staff_account',
  fields: () => ({
    id: { type: GraphQLID },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    email: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    created_at: { type: TimestampType },
    updated_at: { type: TimestampType },
    created_by: { type: StaffRefType },
    updated_by: { type: StaffRefType },
  }),
});

// --------------------------- REFERENCES ---------------------------

export const StaffRefType = new GraphQLObjectType({
  name: 'staffRef',
  fields: () => ({
    id: { type: GraphQLID },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
  }),
});
