/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Components */
import { Button, Form, Icon } from 'semantic-ui-react';

/* Hooks */
import { useDeviceType, useUI } from '@/hooks';
import { useAddComment, usePubContext } from '@/apps/Posts/hooks';

import './CommentForm.scss';

export const CommentForm = () => {
  const isTabletOrMobile = useDeviceType();

  /* Context */
  const { data } = useUI();
  const { form } = data.posts.preview;

  const { selectedPublication: pub } = usePubContext();

  /* Mutations */
  const mutation = useAddComment();

  const formik = useFormik({
    initialValues: { comment: '' },
    validationSchema: Yup.object({
      comment: Yup.string().required(),
    }),
    onSubmit: async ({ comment }, { resetForm }) => {
      mutation.mutate({ comment: comment.trim(), publication: pub.code });
      resetForm();
    },
  });

  return (
    <Form
      className={`${
        isTabletOrMobile ? 'comment-form' : 'p-absolute comment-form'
      }`}
      onSubmit={formik.handleSubmit}
    >
      <Form.Input
        placeholder={form.placeholder}
        name="comment"
        onChange={formik.handleChange}
        value={formik.values.comment}
        error={formik.errors.comment && true}
      />
      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? <Icon loading name="spinner" /> : form.btn}
      </Button>
    </Form>
  );
};
