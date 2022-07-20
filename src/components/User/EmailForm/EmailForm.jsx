/* hooks & libs */
import React from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

/* Components */
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';

/* GraphQL */
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../gql/user';

import './EmailForm.scss';

function EmailForm({ setShowModal, currentEmail, refetch }) {
  const [updateUser] = useMutation(UPDATE_USER);

  const formik = useFormik({
    initialValues: { email: currentEmail || '' },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
    }),
    onSubmit: async (formData) => {
      try {
        await updateUser({
          variables: { input: formData },
        });

        refetch();
        setShowModal(false);
      } catch (error) {
        toast.error('Error al actualiar el email');
      }
    },
  });

  return (
    <Form className="email-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        placeholder="Escribe tu nuevo email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email && true}
      />

      <Button type="submit" className="btn-submit">
        Actualizar
      </Button>
    </Form>
  );
}

export default EmailForm;
