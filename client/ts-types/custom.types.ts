
// Nullable can be assigned to a value or can be assigned to null.
export declare type Nullable<T> = T | null;

export declare type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: string | number | Date;
  Mixed: string | number | Date;
  Upload: string | number | Date;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: string | number | Date;
  DateTimeTz: string | number | Date;
};

export type SSRProps = {
    csrfToken?: string | null;
    csrfError?: string | null;
    token?: string | null;
    client?: {
      staff_id: string;
    } | null;
  };


  
interface SharedValues {
  created_at?: Nullable<Scalars['DateTimeTz']>;
  updated_at?: Nullable<Scalars['DateTimeTz']>;
  created_by?: Nullable<{
    id: Scalars['ID'];
    first_name?: Scalars['String'];
    last_name?: Scalars['String'];
  }>;
  updated_by?: Nullable<{
    id: Scalars['ID'];
    first_name?: Scalars['String'];
    last_name?: Scalars['String'];
  }>;
  page: Nullable<Scalars['Int']>;
  limit: Nullable<Scalars['Int']>;
}

export interface StaffAccountType extends SharedValues {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  email: string;
  password_hash: string;
  password: string;
  active: boolean;
}