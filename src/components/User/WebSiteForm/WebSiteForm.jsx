import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../gql/user';
import './WebSiteForm.scss';

function WebSiteForm({ setShowModal, currentWebSite, refetch }) {
  const [updateUser] = useMutation(UPDATE_USER);

  const formik = useFormik({
    initialValues: { webSite: currentWebSite || '' },
    validationSchema: Yup.object({
      webSite: Yup.string().required(),
    }),
    onSubmit: async (formData) => {
      try {
        await updateUser({ variables: { input: formData } });
        refetch();
        setShowModal(false);
      } catch (error) {
        toast.error('Error al actualizar el sitio web');
      }
    },
  });

  return (
    <Form
      className="site-web-form"
      onSubmit={formik.handleSubmit}
    >
      <Form.Input
        placeholder="URL web"
        name="webSite"
        value={formik.values.webSite}
        onChange={formik.handleChange}
        error={formik.errors.webSite && true}
      />

      <Button type="submit" className="btn-submit">
        Actualizar
      </Button>
    </Form>
  );
}

export default WebSiteForm;
