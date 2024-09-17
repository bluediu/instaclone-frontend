/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Components */
import { Button, Form } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../hooks';
import { useLoginMutation } from '../../../hooks';

/* Types */
import { TranslationType } from '../../../../../types';

import './LoginForm.scss';

export const LoginForm = () => {
  const { data } = useUI();

  const { auth, login } = data as TranslationType;
  const mutate = useLoginMutation();

  // TODO: Change authentication.
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      // email: '',
      username: 'maria',
      password: 'kernelpanic',
    },
    validationSchema: Yup.object({
      // email: Yup.string()
      // .email('Invalid email format')
      // .required('Email is required'),
      username: Yup.string().required(login.errors.username),
      password: Yup.string()
        .required(login.errors.password.required)
        .min(6, login.errors.password.min),
    }),
    onSubmit: (data) => {
      mutate.mutate(data);
    },
  });

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h2>{auth.title}</h2>

      <Form.Input
        type="text"
        name="username"
        placeholder={login.username}
        value={values.username}
        onChange={handleChange}
        error={errors.username}
      />
      <Form.Input
        type="password"
        name="password"
        placeholder={login.password}
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />
      <Button loading={mutate.isPending} type="submit" className="btn-submit">
        {login.btn}
      </Button>
    </Form>
  );
};
