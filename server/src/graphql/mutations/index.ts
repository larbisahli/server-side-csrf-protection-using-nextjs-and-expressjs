import { GraphQLObjectType } from 'graphql';
import staffFields from './staff';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...staffFields,
  },
});
