import { Request, Response, NextFunction } from 'express';
import { ErrorNames, CookieNames } from './enums';

export interface ErrorHandler extends Error {
  code?: string;
}
export interface ErrorType {
  error: ErrorHandler | Error | null;
  message: string;
  from: string;
  meta?: unknown;
  type: ErrorNames;
}

interface GraphRequest extends Request {
  cookies: unknown;
  staff_id: string;
  customer_id: string;
}

export type ExpressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export interface GraphQLContextType {
  req: GraphRequest;
  res: Response;
  csrf: {
    generate: () => { token: string | null; secret: string | null };
    verify: (req: Request) => void;
  };
  ip: string;
}

// Nullable can be assigned to a value or can be assigned to null.
export declare type Nullable<T> = T | null;

/** Built-in and custom scalars are mapped to their actual values */
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
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: string | number | Date;
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
