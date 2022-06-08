import * as yup from 'yup';

export const staffValidationSchema = yup.object().shape({
  first_name: yup.string().required('Error last name required'),
  last_name: yup.string().required('Error first name required'),
  email: yup
    .string()
    .email('Error email format')
    .required('Error email required'),
  //   confirm_password: yup
  //     .string()
  //     .oneOf([yup.ref('password'), null], 'Error match passwords')
  //     .required('Error confirm password'),
  password: yup.string().required('Error password required')
});
