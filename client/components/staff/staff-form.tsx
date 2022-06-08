import { useMutation } from '@apollo/client';
import Card from '@components/ui/card';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Nullable, Scalars, StaffAccountType } from '@ts-types/custom.types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CREATE_STAFF } from '@graphql/staff';
import { staffValidationSchema } from './staff-validation-schema';
import cn from 'classnames';

type FormValues = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
};

const defaultValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: ''
};

type IProps = {
  csrfToken?: Nullable<Scalars['String']>;
};

export default function StaffForm({ csrfToken }: IProps) {
  const router = useRouter();

  const [error, setError] = useState<unknown | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(staffValidationSchema)
  });

  const [createStaff, { loading: creating }] = useMutation(CREATE_STAFF, {
    context: {
      headers: {
        'x-csrf-token': csrfToken
      }
    },
    onCompleted: (data: { createStaff: StaffAccountType }) => {
      if (data?.createStaff?.first_name) {
        console.log('Successfully created staff:>> ');
        setSuccess(true);
        setError(null);
      }
    }
  });

  const onSubmit = async (values: FormValues) => {
    createStaff({ variables: values }).catch((err) => {
      setError(err);
      setSuccess(false);
    });
  };

  console.log('error :>> ', error);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap my-5 sm:my-8">
        <Card
          className={cn('w-[500px]', {
            'bg-white': success === null,
            'bg-red-300': success === false,
            'bg-green-300': success
          })}
        >
          <Input
            label={'First Name'}
            // @ts-ignore
            {...register('first_name')}
            type="text"
            error={errors.first_name?.message!}
            variant="outline"
            className="mb-5"
          />

          <Input
            label={'Last Name'}
            // @ts-ignore
            {...register('last_name')}
            type="text"
            error={errors.last_name?.message!}
            variant="outline"
            className="mb-5"
          />

          <Input
            label={'Email'}
            // @ts-ignore
            {...register('email')}
            type="email"
            error={errors.email?.message!}
            variant="outline"
            className="mb-5"
          />

          <Input
            label={'Password'}
            // @ts-ignore
            {...register('password')}
            type="password"
            error={errors.password?.message!}
            variant="outline"
            className="mb-5"
          />
          {/* @ts-ignore */}
          {error?.message}
        </Card>
      </div>
      <div className="mb-4 text-end w-full flex items-center justify-center">
        <Button loading={creating} disabled={creating}>
          Create Staff
        </Button>
      </div>
    </form>
  );
}
