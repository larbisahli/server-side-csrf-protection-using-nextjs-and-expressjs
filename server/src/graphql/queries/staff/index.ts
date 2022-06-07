import { GraphQLID } from 'graphql';
import { StaffType } from '@graphql/types';
import Staff from './resolvers';

const resolvers = new Staff();

const staffFields = {
  staff: {
    type: StaffType,
    args: {
      id: { type: GraphQLID },
    },
    resolve: resolvers.staff,
  },
};

export default staffFields;
