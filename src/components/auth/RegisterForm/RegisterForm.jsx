import { Form, Button } from 'semantic-ui-react';
import './RegisterForm.scss';
import { useFormik } from 'formik';

const RegisterForm = ({ setShowLogin }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: null,
    onSubmit: (formValues) => {
      console.log(formValues);
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
          onChange={formik.handleChange}
        />
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          onChange={formik.handleChange}
        />
        <Form.Input
          type="text"
          placeholder="Correo electrónico"
          name="email"
          onChange={formik.handleChange}
        />
        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={formik.handleChange}
        />
        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
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
