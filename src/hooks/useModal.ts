import { useCallback, useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = useCallback(() => setIsOpenModal(true), []);
  const closeModal = useCallback(() => setIsOpenModal(false), []);
  const toggleModal = useCallback(() => setIsOpenModal((prev) => !prev), []);

  return {
    isOpenModal,
    openModal,
    closeModal,
    toggleModal
  };
};

export default useModal;
