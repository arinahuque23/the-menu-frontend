'use client';

import Image from 'next/image';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { useAuthModal } from '@/context/AuthPopupContext';

import { EAuthModalType } from '@/modules/auth/enums/auth.enum';

import { menuItems } from '@/data/common.data';

import DownArrowIcon from '@/icons/DownArrowIcon';
import LogoutIcon from '@/icons/LogoutIcon';
import UpArrowIcon from '@/icons/UpArrowIcon';

import CloseIcon from '@/icons/CloseIcon';
import { useRouter } from 'next/navigation';
import langueage from '/public/svg/langueage.svg';

interface IHamburger {
  onClick: () => void;
  setIsMenuOpen: (show: boolean) => void
}
const Hamburger: React.FC<IHamburger> = ({ onClick, setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const { isOpenAuthModal, setIsOpenAuthModal, setAuthModalType, authModalType, loggedIn, setLoggedIn } = useAuthModal();
  const languages = ['English', 'French', 'Spanish'];
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [showOptions, setShowOptions] = useState(false);
  const router = useRouter()

  const handleLanguageSelect = (language: any) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div>
      <div className='flex items-center justify-between border-b border-r-clr-brown-4d p-5'>

        <p className='font-medium-disp text-[22px] leading-[32px] text-clr-black-01'>{loggedIn ? "Hello, Leonardo!" : "Welcome!"}</p>



        <button onClick={onClick} className='size-8 flex items-center justify-center'>
          <CloseIcon fill='#716667' />
        </button>
      </div>
      <div className='p-6'>
        {loggedIn && (
          <div className='relative mb-8'>
            <div
              onClick={() => setShowOptions(!showOptions)}
              className='flex w-full items-center justify-between gap-4 rounded-full bg-clr-white-f5 px-4 py-2.5 font-light-disp text-sm leading-[24px] text-clr-brown-67'
            >
              <span>United States of America</span>
              <span className={`transition-transform duration-300`}>
                {showOptions ? <UpArrowIcon fillColor='#716667' /> : <DownArrowIcon fillColor='#716667' />}
              </span>
            </div>
            {showOptions && (
              <div className='absolute left-0 top-[115%] z-50 w-full rounded-2xl bg-white shadow transition-all duration-300'>
                <div>
                  {[1, 2, 3].map((item, index) => (
                    <button
                      key={index}
                      type='button'
                      onClick={() => setShowOptions(false)}
                      className='w-full overflow-hidden px-6 py-3 text-start font-light-disp text-sm leading-[24px] text-clr-brown-67 transition-all duration-300 ease-in hover:bg-clr-white-fa'
                    >
                      United States of America
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {menuItems.map((item: any, index) => (

          <div key={index} className='border-b border-clr-white-f5 first:pt-0 py-5'>
            <div
              onClick={() => {
                if (loggedIn) {
                  router.push(item.pathname);
                } else {
                  setAuthModalType(EAuthModalType.LOGIN);
                  setIsOpenAuthModal(true);
                }
                setIsMenuOpen(false);
              }}
              className='flex items-center gap-3 cursor-pointer'
            >
              <Image src={item.icon} alt='img' width={24} height={24} />
              <span className='font-light-disp text-base text-clr-black-01'>{item.name}</span>
            </div>
          </div>
        ))}

        <div className='relative'>
          <div className='flex cursor-pointer items-center gap-3 pt-5' onClick={toggleDropdown}>
            <Image src={langueage} alt='language' />
            <span className='font-light-disp'>{selectedLanguage}</span>
            <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          {isOpen && (
            <div className='absolute left-0 top-full z-10 mt-2 w-full rounded-md bg-white font-light-disp shadow-md'>
              {languages.map((language) => (
                <div
                  key={language}
                  className={`cursor-pointer px-4 py-2 font-light-disp text-base hover:bg-gray-100 ${selectedLanguage === language ? 'bg-gray-50 font-light-disp' : 'font-light-disp'
                    }`}
                  onClick={() => handleLanguageSelect(language)}
                >
                  {language}
                </div>
              ))}
            </div>
          )}
        </div>

        {loggedIn ? (
          <button
            onClick={() => setLoggedIn(false)}
            className='flex items-center gap-3 pt-[76px]  font-semi-bold-disp text-base  text-clr-red-0b'
          >
            Log out
            <LogoutIcon />
          </button>
        ) : (
          <div>

            <div className='flex items-center gap-1 pt-[56px]  text-base text-clr-brown-67 mb-8'>
              <span className='font-book-disp'> Already have an account?</span>{' '}
              <button
                onClick={() => {
                  setAuthModalType(EAuthModalType.LOGIN);
                  setIsOpenAuthModal(true);
                  setIsMenuOpen(false)
                }}
                className='font-semi-bold-disp leading-6 text-clr-red-0b'
              >
                Log in
              </button>
            </div>

            <button
              onClick={() => {
                setAuthModalType(EAuthModalType.SIGNUP);
                setIsOpenAuthModal(true);
                setIsMenuOpen(false)
              }}
              className='font-semi-bold-disp w-full bg-clr-red-0b rounded-2xl p-3 text-white text-base'
            >
              {' '}
              Sign up
            </button>


          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
