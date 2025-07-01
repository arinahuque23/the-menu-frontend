'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useAuthModal } from '@/context/AuthPopupContext';
import { useSearch } from '@/context/SearchContext';

import TheMenu from '/public/svg/TheMenu.svg';

import Hamburger from '@/modules/home/components/Hamburger';

import ArrowLeftIcon from '@/icons/ArrowLeftIcon';
import HamburgerIcon from '@/icons/HamburgerIcon';
import ProfileIcon from '@/icons/ProfileIcon';

import avater from "/public/images/avatar.png";

interface IHeader {
  showBackButton?: boolean;
}

const Header: React.FC<IHeader> = ({ showBackButton }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSearchQuery } = useSearch();
  const { loggedIn, setIsOpenAuthModal } = useAuthModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchQuery('');
    router.back();
  };

  const handleRedirectProfile = () => {
    if (loggedIn) {
      router.push('/profile')
    }
    else {

      setIsOpenAuthModal(true)
    }

  }

  return (
    <div className='py-4'>
      <div className='flex items-center justify-between gap-4 relative'>


        {showBackButton && (
          <button
            onClick={handleGoBack}
            className='flex size-9 flex-shrink-0 items-center justify-center  '
          >
            <ArrowLeftIcon fill='#120001' />
          </button>
        )}


        <button onClick={handleRedirectProfile} className={showBackButton ? 'size-9  rounded-full overflow-hidden flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-[40px]' : ''}>{loggedIn ? <Image className='size-6 object-cover' src={avater} alt='avater' /> : <ProfileIcon />}</button>



        <Link href='/home' className='flex-shrink-0'>
          <Image src={TheMenu} alt='TheMenu' className='' />
        </Link>
        <button
          onClick={toggleMenu}
          className='flex size-9 flex-shrink-0 items-center justify-center '
          aria-label='Toggle menu'
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Overlay and Side Menu */}
      <div
        className={`fixed inset-0 z-[99999] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50' onClick={toggleMenu}></div>

        {/* Menu Content */}
        <div
          className={`absolute right-0 top-0 h-full w-80 transform bg-white shadow-lg transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='flex h-full flex-col'>
            <Hamburger onClick={toggleMenu} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
