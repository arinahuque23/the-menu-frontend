'use client';

import Link from 'next/link';
import { useState, type Dispatch, type SetStateAction } from 'react';

import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { VscEyeClosed } from 'react-icons/vsc';

import { useAuthModal } from '@/context/AuthPopupContext';

import CloseIcon from '@/icons/CloseIcon';
import TelegramIcon from '@/icons/TelegramIcon';
import WhatsappIcon from '@/icons/WhatsappIcon';

import EmailIcon from '@/icons/EmailIcon';
import { EAuthModalType } from '@/modules/auth/enums/auth.enum';

type TLoginModalProps = {
  setIsOpenAuthModal: Dispatch<SetStateAction<boolean>>;
  setAuthModalType: Dispatch<SetStateAction<EAuthModalType>>;
};

const LoginModal: React.FC<TLoginModalProps> = ({ setIsOpenAuthModal, setAuthModalType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const { setLoggedIn } = useAuthModal();

  return (
    <>
      {
        isEmailLogin ? (
          <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center'>
            <div className='w-full rounded-t-3xl bg-white px-5 pt-6 relative'>
              <button onClick={() => setIsOpenAuthModal(false)} className='absolute top-[22px] right-6'><CloseIcon fill='#000' /></button>
              <div className='mb-8'>
                <h2 className='mb-3 text-center font-bold-disp text-2xl font-bold'>Log in</h2>
                <p className='text-center font-book-disp text-clr-brown-4d'>Continue to book your table</p>
              </div>

              <div className='space-y-8'>
                <form className='input-group mb-2'>
                  <div className='mb-6 rounded-2xl border px-3 py-2'>
                    <label htmlFor='email' className='font-black-body-normal text-xs text-clr-gray-99'>
                      Email address
                    </label>
                    <input
                      id='email'
                      type='email'
                      placeholder='Type your email'
                      className='w-full outline-none placeholder:font-book-disp text-base placeholder:text-clr-brown-4d'
                    />
                  </div>

                  <div className='relative mb-2 rounded-2xl border px-3 py-2'>
                    <label htmlFor='password' className='font-black-body-normal text-xs text-clr-gray-99'>
                      Password
                    </label>
                    <input
                      id='password'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='* * * * * * * * *'
                      className='w-full outline-none placeholder:font-book-disptext-base placeholder:text-clr-brown-4d'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword((prev) => !prev)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-xl text-clr-brown-4d focus:outline-none'
                    >
                      {showPassword ? <VscEyeClosed /> : <MdOutlineRemoveRedEye />}
                    </button>
                  </div>
                  <div className='text-end'>
                    <Link
                      href={'/forgot-password'}
                      onClick={() => setIsOpenAuthModal(false)}
                      className='mb-8 inline-block font-medium-body text-sm text-clr-red-0b'
                    >
                      Forget password
                    </Link>
                  </div>

                  <button
                    type='button'
                    onClick={() => {
                      setLoggedIn(true);
                      setIsOpenAuthModal(false);
                    }}
                    className='w-full rounded-2xl bg-clr-red-0b px-2 py-3 text-center font-book-disp font-bold text-white'
                  >
                    Log in
                  </button>
                </form>

                <div className='login-provider'>
                  <p className='mb-4 text-center font-book-disp text-base text-clr-brown-67'>Or continue with</p>
                  <div className='mb-6 flex justify-center space-x-4 border-b pb-8'>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full border'>
                      <img src='/svg/google.svg' alt='google' />
                    </button>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full border'>
                      <img src='/svg/facebook.svg' alt='google' />
                    </button>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full border'>
                      <img src='/svg/apple.svg' alt='google' />
                    </button>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full border'>
                      <WhatsappIcon fill='#00B12F' />
                    </button>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full border'>
                      <TelegramIcon fill='#02A7E9' />
                    </button>
                  </div>

                  <p className='mb-4 text-center  font-light-disp text-base text-clr-brown-67'>
                    Don't have an account? {''}
                    <button
                      type='button'
                      onClick={(event) => {
                        event.stopPropagation();
                        setAuthModalType(EAuthModalType.SIGNUP);
                        setIsOpenAuthModal(true);
                      }}
                      className='ml-1 font-bold-disp text-clr-red-0b'
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) :
          (<div className='absolute bottom-0 left-0 right-0 flex items-center justify-center'>
            <div className='w-full rounded-t-3xl bg-white px-5 pt-6 relative'>
              <button onClick={() => setIsOpenAuthModal(false)} className='absolute top-[22px] right-6'><CloseIcon fill='#000' /></button>
              <div className='mb-8'>
                <h2 className='mb-3 text-center font-bold-disp text-2xl font-bold'>Log in</h2>
                <p className='text-center font-book-disp text-clr-brown-4d'>Continue to book your table</p>
              </div>

              <div>
                <div className='mb-8'>
                  <button
                    type='button'
                    className='w-full rounded-2xl bg-[#01B401] px-2 py-3 text-center font-semi-bold-disp font-bold text-white flex items-center justify-center mb-4'
                  >
                    <span className='flex items-center gap-2'>
                      <WhatsappIcon fill='white' /> Log in with WhatsApp
                    </span>
                  </button>

                  <button
                    type='button'
                    className='w-full rounded-2xl bg-[#02A7E9] px-2 py-3 text-center font-semi-bold-disp font-bold text-white flex items-center justify-center'
                  >
                    <span className='flex items-center gap-2'>
                      <TelegramIcon fill='white' /> Log in with Telegram
                    </span>
                  </button>
                </div>

                <div className='login-provider'>
                  <p className='mb-4 text-center font-book-disp text-base text-clr-brown-67'>Or continue with</p>
                  <div className='mb-6 flex justify-center space-x-4 border-b pb-8'>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full border'>
                      <img src='/svg/google.svg' alt='google' />
                    </button>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full border'>
                      <img src='/svg/facebook.svg' alt='google' />
                    </button>
                    <button className='flex h-12 w-12 items-center justify-center rounded-full border'>
                      <img src='/svg/apple.svg' alt='google' />
                    </button>

                    <button onClick={() => setIsEmailLogin(true)} className='flex h-12 w-12 items-center justify-center rounded-full border'>
                      <EmailIcon />
                    </button>


                  </div>

                  <p className='mb-4 text-center font-book-disp text-base text-clr-brown-67'>
                    Don't have an account?
                    <button
                      type='button'
                      onClick={(event) => {
                        event.stopPropagation();
                        setAuthModalType(EAuthModalType.SIGNUP);
                        setIsOpenAuthModal(true);
                      }}
                      className='ml-1 font-semi-bold-disp text-clr-red-0b'
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>)
      }

    </>
  );
};

export default LoginModal;
