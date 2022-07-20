/* hooks */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

/* Components */
import { Form, Button } from 'semantic-ui-react';

/* GraphQL */
import { REGISTER } from '../../../gql/user';
import { useMutation } from '@apollo/client';

import './RegisterForm.scss';

const RegisterForm = ({ setShowLogin }) => {
  const [register] = useMutation(REGISTER);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      name: Yup.string().required('Tu nombre es obligatorio'),
      username: Yup.string()
        .matches(
          /^[a-zA-Z0-9-]*$/,
          'El nombre de usuario no puede tener espacios en blanco'
        )
        .required('El nombre de usuario es obligatorio'),
      email: Yup.string()
        .email('El email no es valido')
        .required('El email es obligatorio'),
      password: Yup.string()
        .required('La contraseña es obligatoria')
        .oneOf(
          [Yup.ref('repeatPassword')],
          'Las contraseñas no son iguales'
        ),
      repeatPassword: Yup.string()
        .required('La contraseña es obligatoria')
        .oneOf(
          [Yup.ref('password')],
          'Las contraseñas no son iguales'
        ),
    }),
    onSubmit: async (formValues) => {
      try {
        const newUser = formValues;
        delete newUser.repeatPassword;

        await register({
          variables: {
            input: newUser,
          },
        });

        toast.success('Usuario registrado correctamente');
        setShowLogin(true);
      } catch (error) {
        toast.error(error.message);
        console.error(error);
      }
    },
  });

  return (
    <>
      <h2 className="register-form-title">
        Regístrate para ver fotos de tus amigos.
      </h2>
      <Form
        className="register-form"
        onSubmit={formik.handleSubmit}
      >
        <Form.Input
          type="text"
          placeholder="Nombre y apellido"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name && true}
        />
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username && true}
        />
        <Form.Input
          type="text"
          placeholder="Correo electrónico"
          name="email"
          value={formik.values.email}
          error={formik.errors.email && true}
          onChange={formik.handleChange}
        />
        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formik.values.password}
          error={formik.errors.password && true}
          onChange={formik.handleChange}
        />
        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          error={formik.errors.repeatPassword && true}
          onChange={formik.handleChange}
        />

        <Button type="submit" className="btn-submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
};

function initialValues() {
  return {
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
}

export default RegisterForm;
