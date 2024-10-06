/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Components */
import { Button, Form } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../hooks';
import { useLoginMutation } from '../../../hooks';

import './LoginForm.scss';

export const LoginForm = () => {
  const { data } = useUI();
  const { auth, login } = data;

  const mutate = useLoginMutation();

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(login.errors.email.format)
        .required(login.errors.email.required),
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
        type="email"
        name="email"
        placeholder={login.email}
        value={values.email}
        onChange={handleChange}
        error={errors.email}
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
