import { useMutation, useQuery } from '@apollo/client';
import Card from '@components/ui/card';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Label from '@components/ui/label';

import { Nullable, Scalars, StaffAccountType } from '@ts-types/custom.types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {CREATE_STAFF} from '@graphql/staff'


type FormValues = {
    first_name: string
    last_name: string
    phone_number: string
    email: string
    password:string
}

const defaultValues = {
  first_name: '',
  last_name: '',
  email: ''
};

type IProps = {
    csrfToken?: Nullable<Scalars['String']>;
};

export default function StaffForm({
    csrfToken
}: IProps) {
  const router = useRouter();
  
  const [error, setError] = useState();

  console.log('error :>> ', error);
 
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    defaultValues: defaultValues,
  });

  const [createStaff, { loading: creating }] = useMutation(CREATE_STAFF, {
    context: {
      headers: {
        'x-csrf-token': csrfToken
      }
    },
    onCompleted: (data: { createStaff: StaffAccountType }) => {
      if (data?.createStaff?.id) {
        console.log('Successfully created staff:>> ',);
      }
    }
  });
 
  const onSubmit = async (values: FormValues) => {
    createStaff({ variables: values }).catch((err) => {
        setError(err);
      });
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap my-5 sm:my-8">
        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label={'First Name'}
            // @ts-ignore
            {...register('first_name')}
            error={errors.first_name?.message!}
            variant="outline"
            className="mb-5"
          />

          <Input
            label={'Last Name'}
            // @ts-ignore
            {...register('last_name')}
            error={errors.last_name?.message!}
            variant="outline"
            className="mb-5"
          />

          <Input
            label={'Email'}
            // @ts-ignore
            {...register('email')}
            error={errors.email?.message!}
            variant="outline"
            className="mb-5"
          />

        </Card>
      </div>
      <div className="mb-4 text-end">
        <Button loading={creating} disabled={creating}>
          Create Staff
        </Button>
      </div>
    </form>
  );
}
