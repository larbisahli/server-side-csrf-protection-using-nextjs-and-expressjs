import { GraphQLString } from 'graphql';
import { StaffType } from '@graphql/types';
import Staff from './resolvers';

const resolvers = new Staff();

const staffFields = {
  createStaff: {
    type: StaffType,
    args: {
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      phone_number: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    },
    resolve: resolvers.createStaff,
  },
};

export default staffFields;
