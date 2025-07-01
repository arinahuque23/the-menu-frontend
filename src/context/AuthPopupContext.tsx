'use client';

import { EAuthModalType } from '@/modules/auth/enums/auth.enum';
import { createContext, ReactNode, useContext, useState, type Dispatch, type SetStateAction } from 'react';

interface IAuthPopupContextProps {
  isOpenAuthModal: boolean;
  loggedIn: boolean;
  authModalType: EAuthModalType;
  setIsOpenAuthModal: Dispatch<SetStateAction<boolean>>;
  setAuthModalType: Dispatch<SetStateAction<EAuthModalType>>;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const AuthPopupContext = createContext<IAuthPopupContextProps | undefined>(undefined);

export const AuthPopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState<EAuthModalType>(EAuthModalType.LOGIN);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthPopupContext.Provider
      value={{ isOpenAuthModal, setIsOpenAuthModal, authModalType, setAuthModalType, loggedIn, setLoggedIn }}
    >
      {children}
    </AuthPopupContext.Provider>
  );
};

export const useAuthModal = (): IAuthPopupContextProps => {
  const context = useContext(AuthPopupContext);
  if (!context) {
    throw new Error('useAuthModal must be used within an AuthPopupProvider');
  }
  const { isOpenAuthModal, setIsOpenAuthModal, authModalType, setAuthModalType, loggedIn, setLoggedIn } =
    context;
  return { isOpenAuthModal, setIsOpenAuthModal, authModalType, setAuthModalType, loggedIn, setLoggedIn };
};
