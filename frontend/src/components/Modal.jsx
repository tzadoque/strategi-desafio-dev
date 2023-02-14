import { useContext, useEffect } from 'react';

// context
import { GlobalContext } from '../context/GlobalContext';

// assets
import CloseIcon from '../assets/close.svg';

// my components
import { ModalBox } from './Box';
import { CloseButton, PrimaryButton, SecondaryButton } from './Button';
import { Heading4 } from './Text';
import { ModalContainer } from './Container';

const Modal = ({ children, modalTitle, acceptButtonFn, acceptButtonText }) => {
  const { setShowModal, setModal } = useContext(GlobalContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = () => {
    setModal(null);
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <ModalContainer>
      <ModalBox>
        <div className='d-flex justify-content-end'>
          <CloseButton onClick={handleCloseModal}>
            <img src={CloseIcon} alt='' />
          </CloseButton>
        </div>
        <Heading4>{modalTitle || 'Modal Title'}</Heading4>
        <hr />
        {children}
        <div className='d-flex justify-content-end gap-24'>
          <SecondaryButton onClick={handleCloseModal}>Cancel</SecondaryButton>
          <PrimaryButton onClick={acceptButtonFn}>
            {acceptButtonText || 'Accept'}
          </PrimaryButton>
        </div>
      </ModalBox>
    </ModalContainer>
  );
};

export { Modal };
