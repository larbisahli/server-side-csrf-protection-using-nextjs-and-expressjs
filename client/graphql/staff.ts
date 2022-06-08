import { gql } from '@apollo/client';

export const CREATE_STAFF = gql`
  mutation CreateStaff(
    $first_name: String!
    $last_name: String!
    $phone_number: String
    $email: String!
    $password: String!
  ) {
    createStaff(
      first_name: $first_name
      last_name: $last_name
      phone_number: $phone_number
      email: $email
      password: $password
    ) {
      id
      first_name
      last_name
    }
  }
`;
