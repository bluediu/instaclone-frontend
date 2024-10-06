/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Components */
import { Button, Form } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../../../hooks';

import './CommentForm.scss';

export const CommentForm = () => {
  const { data } = useUI();
  const { form } = data.posts.preview;

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
        placeholder={form.placeholder}
        name="comment"
        onChange={formik.handleChange}
        value={formik.values.comment}
        error={formik.errors.comment && true}
      />
      <Button type="submit">{form.btn}</Button>
    </Form>
  );
};
