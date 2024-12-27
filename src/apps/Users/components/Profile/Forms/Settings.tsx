import { useEffect } from 'react';

/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Components */
import { Button, ButtonGroup, ButtonOr, Form } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '@/hooks';

import { useUserUpdate } from '@/apps/Users/hooks';

/* Interfaces */
import { IUser } from '@/apps/Users/interfaces';

/* Tipos */
interface IEditUserForm {
  first_name: string;
  last_name: string;
  description: string;
  website: string;
}

interface IProps {
  user: IUser;
  onClose: () => void;
}

export const Settings = ({ user, onClose }: IProps) => {
  const { data } = useUI();
  const { profile } = data;

  const mutate = useUserUpdate(user.username);

  const { isPending, isSuccess, isError } = mutate;

  useEffect(() => {
    if (mutate.isSuccess) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

  const values: IEditUserForm = {
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    description: user.description || '',
    website: user.website || '',
  };

  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      first_name: Yup.string().min(2, profile.form.errors.firstName),
      last_name: Yup.string().min(2, profile.form.errors.lastName),
      description: Yup.string().max(200, profile.form.errors.description),
      website: Yup.string().url(profile.form.errors.website),
    }),
    onSubmit: async (formValues) => {
      mutate.mutate(formValues);
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="form-input-style">
        <Form.Input
          type="text"
          label={profile.form.firstName}
          name="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.errors.first_name}
        />
        <Form.Input
          type="text"
          name="last_name"
          label={profile.form.lastName}
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.errors.last_name}
        />
        <Form.TextArea
          name="description"
          label={profile.form.description}
          style={{ resize: 'none' }}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.errors.description}
        />
        <Form.Input
          type="text"
          name="website"
          label={profile.form.website}
          placeholder="https://"
          value={formik.values.website}
          onChange={formik.handleChange}
          error={formik.errors.website}
        />

        <div className="text-end">
          <ButtonGroup>
            <Button
              color="grey"
              type="button"
              disabled={isPending}
              onClick={onClose}
            >
              {profile.form.cancelBtn}
            </Button>
            <ButtonOr />
            <Button color="yellow" loading={isPending} type="submit">
              {profile.form.btn}
            </Button>
          </ButtonGroup>
        </div>
      </Form>
    </>
  );
};
