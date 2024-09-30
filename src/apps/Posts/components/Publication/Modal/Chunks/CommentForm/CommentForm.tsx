/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Components */
import { Button, Form } from 'semantic-ui-react';

import './CommentForm.scss';

export const CommentForm = () => {
  const formik = useFormik({
    initialValues: { comment: '' },
    validationSchema: Yup.object({
      comment: Yup.string().required(),
    }),
    onSubmit: async (formValues) => {
      console.log(formValues);
    },
  });

  return (
    <Form className="comment-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        placeholder="Añade un comentario..."
        name="comment"
        onChange={formik.handleChange}
        value={formik.values.comment}
        error={formik.errors.comment && true}
      />
      <Button type="submit">Publicar</Button>
    </Form>
  );
};
