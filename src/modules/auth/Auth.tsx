'use client';

import { useEffect } from 'react';

import { useAuthModal } from '@/context/AuthPopupContext';

import LoginModal from '@/modules/auth/components/LoginModal';
import SignupModal from '@/modules/auth/components/SignupModal';

import { EAuthModalType } from '@/modules/auth/enums/auth.enum';

const Auth = () => {
  const { authModalType, isOpenAuthModal, setAuthModalType, setIsOpenAuthModal } = useAuthModal();

  const handleClose = () => setIsOpenAuthModal(false);

  useEffect(() => {
    if (isOpenAuthModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpenAuthModal]);

  return (
    isOpenAuthModal && (
      <div
        onClick={handleClose}
        className='container fixed bottom-0 left-0 right-0 z-10 flex h-full items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm'
      >
        <div onClick={(e) => e.stopPropagation()}>
          {authModalType === EAuthModalType.LOGIN ? (
            <LoginModal setAuthModalType={setAuthModalType} setIsOpenAuthModal={setIsOpenAuthModal} />
          ) : (
            <SignupModal setAuthModalType={setAuthModalType} setIsOpenAuthModal={setIsOpenAuthModal} />
          )}
        </div>
      </div>
    )
  );
};

export default Auth;
