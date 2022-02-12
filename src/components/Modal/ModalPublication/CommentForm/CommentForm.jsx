import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './CommentForm.scss';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../../../gql/comment';

function CommentForm({ publication, refetch }) {
  const [addComment] = useMutation(ADD_COMMENT);

  const formik = useFormik({
    initialValues: { comment: '' },
    validationSchema: Yup.object({
      comment: Yup.string().required(),
    }),
    onSubmit: async (formValues) => {
      try {
        await addComment({
          variables: {
            input: {
              idPublication: publication.id,
              comment: formValues.comment,
            },
          },
        });

        formik.handleReset();
        refetch();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form
      className="comment-form"
      onSubmit={formik.handleSubmit}
    >
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
}

export default CommentForm;
