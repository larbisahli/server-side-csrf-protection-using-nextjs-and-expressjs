import { StaffAccountType } from '@interfaces/index';

export default class Staff {
  public staff = async (parent: any, { id }: StaffAccountType) => {
    // Your database logic to get the staff
    return {};
  };
}
