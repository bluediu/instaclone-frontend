import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../gql/user';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import './PasswordForm.scss';

function PasswordForm({ logout }) {
  const [updateUser] = useMutation(UPDATE_USER);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      currentPassword: Yup.string().required(),
      newPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('repeatNewPassword')]),
      repeatNewPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('newPassword')]),
    }),
    onSubmit: async (formData) => {
      try {
        const result = await updateUser({
          variables: {
            input: {
              currentPassword: formData.currentPassword,
              newPassword: formData.newPassword,
            },
          },
        });

        if (!result.data.updateUser) {
          toast.error('Error al cambiar la contraseña');
        } else {
          logout();
        }
      } catch (error) {
        toast.error('Error al cambiar la contraseña');
      }
    },
  });

  return (
    <Form
      className="password-form"
      onSubmit={formik.handleSubmit}
    >
      <Form.Input
        type="password"
        placeholder="Contraseña actual"
        name="currentPassword"
        value={formik.values.currentPassword}
        onChange={formik.handleChange}
        error={formik.errors.currentPassword && true}
      />
      <Form.Input
        type="password"
        placeholder="Nueva contraseña"
        name="newPassword"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.errors.newPassword && true}
      />
      <Form.Input
        type="password"
        placeholder="Repetir nueva contraseña"
        name="repeatNewPassword"
        value={formik.values.repeatNewPassword}
        onChange={formik.handleChange}
        error={formik.errors.repeatNewPassword && true}
      />
      <Button type="submit" className="btn-submit">
        Actualizar
      </Button>
    </Form>
  );
}

function initialValues() {
  return {
    currentPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  };
}

export default PasswordForm;
