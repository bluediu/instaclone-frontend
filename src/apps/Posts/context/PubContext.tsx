import { createContext, useState } from 'react';

/* Hooks */
import { useBasicModal } from '@/hooks';

/* Interfaces */
import { IPublication } from '../interfaces';

interface PublicationContextType {
  selectedPublication: IPublication;
  isModalOpen: boolean;
  setSelectedPublication: (publication: IPublication) => void;
  openPublicationModal: () => void;
  closePublicationModal: () => void;
}

export const PublicationContext = createContext<PublicationContextType>({
  selectedPublication: {} as IPublication,
  isModalOpen: false,
  setSelectedPublication: () => {},
  openPublicationModal: () => {},
  closePublicationModal: () => {},
});

type TProviderChildren = React.FC<{ children: React.ReactNode }>;
export const PublicationProvider: TProviderChildren = ({ children }) => {
  const [publication, setPublication] = useState<IPublication>(
    {} as IPublication
  );

  const { show, showModal, closeModal } = useBasicModal();

  const selectPub = (pub: IPublication) => setPublication(pub);

  const value: PublicationContextType = {
    selectedPublication: publication,
    setSelectedPublication: selectPub,

    isModalOpen: show,
    openPublicationModal: showModal,
    closePublicationModal: closeModal,
  };

  return (
    <PublicationContext.Provider value={value}>
      {children}
    </PublicationContext.Provider>
  );
};
