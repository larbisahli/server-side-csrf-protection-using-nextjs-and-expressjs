import { gql } from '@apollo/client';

export const CREATE_STAFF = gql`
  mutation CreateStaff(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
  ) {
    createStaff(
      first_name: $first_name
      last_name: $last_name
      email: $email
      password: $password
    ) {
      first_name
      last_name
    }
  }
`;
