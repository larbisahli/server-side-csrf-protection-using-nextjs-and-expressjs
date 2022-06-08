import { StaffAccountType } from '@interfaces/index';
import { GraphQLContextType } from '@interfaces/index';

export default class Staff {
  public createStaff = async (
    parent: any,
    values: StaffAccountType,
    { req, csrf }: GraphQLContextType
  ) => {
    // CSRF Validation, this will throw an error if the token is not valid.
    csrf?.verify(req);

    console.log('values :>', values);

    // Your database logic
    // ....

    return values;
  };
}
