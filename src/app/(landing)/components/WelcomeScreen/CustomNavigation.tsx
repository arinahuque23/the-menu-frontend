'use client';

import { basedSliderContent } from '@/shared/type';
import Link from 'next/link';

type TCustomNavigationProps = {
  activeIndex: number;
  // setIsOpenAuthModal: (value: boolean) => void;
};

const CustomNavigation: React.FC<TCustomNavigationProps> = ({ activeIndex /*setIsOpenAuthModal*/ }) => {
  return (
    <>
      <div className='mt-4 flex justify-center gap-4 px-6'>
        {activeIndex === basedSliderContent.length - 1 ? (
          <Link
            href={'/home'}
            className='w-full cursor-pointer rounded-2xl bg-clr-red-0b py-3 text-center font-bold-disp text-base font-medium text-white'
          >
            Get started
          </Link>
        ) : (
          <button
            type='button'
            disabled={false}
            className='next-button flex h-12 w-12 items-center justify-center rounded-full bg-clr-red-0b font-bold-disp'
          >
            <img src='/svg/right-arrow.svg' alt='icon' />
          </button>
        )}
      </div>
    </>
  );
};

export default CustomNavigation;
