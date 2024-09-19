/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Components */
import { Button, Form } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../hooks';
import { useSignUpMutation } from '../../../hooks';

/* Types */
import { TranslationType } from '../../../../../types';

import './SignUp.scss';

interface ISignUpForm {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  repeat_password: string;
}

export const SignUp = () => {
  const { data } = useUI();
  const { auth, signUp } = data as TranslationType;

  const mutate = useSignUpMutation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      first_name: Yup.string().min(2, signUp.errors.firstName),
      last_name: Yup.string().min(2, signUp.errors.lastName),
      username: Yup.string()
        .matches(/^[a-zA-Z0-9-]*$/, signUp.errors.username.match)
        .required(signUp.errors.username.required),
      email: Yup.string()
        .email(signUp.errors.email.format)
        .required(signUp.errors.email.required),
      password: Yup.string()
        .required(signUp.errors.passwords.required)
        .min(6, signUp.errors.passwords.min)
        .oneOf([Yup.ref('repeat_password')], signUp.errors.passwords.oneOf),
      repeat_password: Yup.string()
        .required(signUp.errors.passwords.required)
        .min(6, signUp.errors.passwords.min)
        .oneOf([Yup.ref('password')], signUp.errors.passwords.oneOf),
    }),
    onSubmit: async (formValues) => {
      mutate.mutate(formValues);
    },
  });

  return (
    <>
      <h2 className="sign-in-form-title">{auth.title}</h2>
      <Form className="sign-in-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          name="first_name"
          placeholder={signUp.firstName}
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.errors.first_name}
        />
        <Form.Input
          type="text"
          name="last_name"
          placeholder={signUp.lastName}
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.errors.last_name}
        />
        <Form.Input
          type="text"
          placeholder={signUp.username}
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Form.Input
          type="text"
          name="email"
          placeholder={signUp.email}
          value={formik.values.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
        />
        <Form.Input
          type="password"
          placeholder={signUp.password}
          name="password"
          value={formik.values.password}
          error={formik.errors.password}
          onChange={formik.handleChange}
        />
        <Form.Input
          type="password"
          placeholder={signUp.repeatPassword}
          name="repeat_password"
          value={formik.values.repeat_password}
          error={formik.errors.repeat_password}
          onChange={formik.handleChange}
        />

        <Button loading={mutate.isPending} type="submit" className="btn-submit">
          {signUp.btn}
        </Button>
      </Form>
    </>
  );
};

function initialValues(): ISignUpForm {
  return {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    repeat_password: '',
  };
}
