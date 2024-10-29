/* Layouts */
import { ModalLayout } from '../../../../../layouts';

/* Components */
import {
  Icon,
  Button,
  Grid,
  Image,
  Form,
  TextArea,
  Message,
} from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../hooks';
import { useHandlePost } from '../../../hooks';

import './ModalUpload.scss';

interface IProps {
  action: 'create' | 'update';

  show: boolean;
  onClose: () => void;

  // On Update actions
  preview?: string;
  desc?: string;
}

export const ModalUpload = (props: IProps) => {
  /* Props */
  const { action, show, onClose, preview, desc } = props;

  const { formik, fileUpload, isPending, getRootProps, getInputProps } =
    useHandlePost({
      action,
      initialValues: { image: '', description: desc || '' },
      preview,
      onClose,
    });

  /* Context */
  const { data } = useUI();
  const { create } = data.posts;

  return (
    <ModalLayout
      show={show}
      size="large"
      onClose={onClose}
      className="modal-upload"
    >
      <>
        <Grid padded>
          <Grid.Column computer={10} mobile={16}>
            <section className={!fileUpload ? 'dropzone-container' : ''}>
              <div
                {...getRootProps()}
                className={`dropzone ${fileUpload ? 'no-border p-0' : ''}`}
              >
                {!fileUpload ? (
                  <>
                    <Icon name="images" />
                    <p>{create.title}</p>
                    <Button primary>{create.btnSelect}</Button>
                  </>
                ) : (
                  <>
                    <Image
                      className="modal-upload__image"
                      src={fileUpload.preview}
                    />
                    <small className="text-secondary mt-2">
                      {create.helpText}
                    </small>
                  </>
                )}
                <input {...getInputProps()} />
              </div>
            </section>
          </Grid.Column>

          <Grid.Column computer={6} mobile={16}>
            <Form onSubmit={formik.handleSubmit} className="form-input-style">
              <Form.Field
                name="description"
                control={TextArea}
                style={{ resize: 'none' }}
                label={create.form.desc}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.errors.description}
              />

              <Button
                type="submit"
                loading={isPending}
                color="black"
                className="mt-5"
                fluid
              >
                {action === 'create' ? create.btnCreate : create.btnUpdate}
              </Button>
            </Form>

            {formik.errors.image && (
              <Message error attached="bottom" className="mt-2">
                <Icon name="warning" />
                {create.validations.img}
              </Message>
            )}
          </Grid.Column>
        </Grid>
      </>
    </ModalLayout>
  );
};
