'use client';
import { useAuthModal } from '@/context/AuthPopupContext';
import { useSearch } from '@/context/SearchContext';
import ArrowLeftIcon from '@/icons/ArrowLeftIcon';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IBackButton {
  title?: string;
  showHamburger?: boolean;
}

const BackButton: React.FC<IBackButton> = ({ title, showHamburger }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { setSearchQuery } = useSearch();
  const { setIsOpenAuthModal } = useAuthModal();

  useEffect(() => {
    sessionStorage.setItem('prevPath', sessionStorage.getItem('currentPath') || '');
    sessionStorage.setItem('currentPath', pathname);
  }, [pathname]);

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchQuery('');
    const prevPath = sessionStorage.getItem('prevPath');

    if (prevPath === '/forgot-password') {
      setIsOpenAuthModal(true);
    }

    router.back();
  };

  return (
    <div className='flex w-full items-center justify-between gap-4'>
      <button
        onClick={handleGoBack}
        className='flex size-9 flex-shrink-0 items-center justify-center rounded-[10px]  backdrop-blur-[20px]'
      >
        <ArrowLeftIcon fill='#120001' />
      </button>
      <h3 className='font-bold-disp text-2xl uppercase leading-[30px] text-clr-red-0b'>{title}</h3>
      <div className='size-9'></div>
    </div>
  );
};

export default BackButton;
