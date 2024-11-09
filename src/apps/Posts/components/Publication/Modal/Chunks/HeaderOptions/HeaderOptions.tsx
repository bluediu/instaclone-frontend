/* Components */
import { Button } from 'semantic-ui-react';
import { SectionSpinner } from '../../../../../../UI/components';

/* Hooks */
import { useUI } from '../../../../../../../hooks';
import { useDeletePub, usePubContext } from '../../../../../hooks';

/* Interfaces */
import { IPublication } from '../../../../../interfaces';

import './HeaderOptions.scss';

interface IProps {
  pub: IPublication;
  closeModal: () => void;
  showEditModal: () => void;
}

export const HeaderOptions = (props: IProps) => {
  const { pub, closeModal, showEditModal } = props;

  /* Context */
  const { data } = useUI();
  const { opts } = data.posts.preview;

  const { closePublicationModal } = usePubContext();

  /* Mutations */
  const deleteMutation = useDeletePub(pub.code);

  /* Functions */
  const onDelete = () => deleteMutation.mutate();

  const onUpdate = () => {
    closeModal();
    showEditModal();
  };

  /* Validations */
  if (deleteMutation.isSuccess || deleteMutation.isError)
    closePublicationModal();

  const isDeleting = deleteMutation.isPending || deleteMutation.isPending;

  return (
    <>
      {isDeleting && <SectionSpinner text="Processing..." />}

      <section className="header-options">
        <Button disabled={isDeleting} onClick={onUpdate}>
          {opts.edit}
        </Button>
        <Button disabled={isDeleting} onClick={onDelete}>
          {opts.delete}
        </Button>
        <Button disabled={isDeleting} onClick={closeModal}>
          {opts.cancel}
        </Button>
      </section>
    </>
  );
};
