import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('name required'),
  username:Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('email required'),
  password:Yup.string().required('password is required')
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('email required'),
  password:Yup.string().required('password is required')
});