'use client';
import { useAuthModal } from '@/context/AuthPopupContext';
import { EAuthModalType } from '@/modules/auth/enums/auth.enum';
import BookTable from '@/modules/restaurant/components/BookTable';

import { Button } from '@/shared/components/ui';
import { useEffect, useState } from 'react';

const RestaurantBookaTable = () => {
  const [showBook, setShowBook] = useState(false);
  const [favorite, setFavorite] = useState(false)
  const { loggedIn, setIsOpenAuthModal, setAuthModalType } = useAuthModal()
  useEffect(() => {
    if (showBook) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showBook]);
  return (
    <div className='!mt-0 flex gap-3 px-5 py-5 shadow-top-sm sticky bottom-0 left-0 bg-white z-[99999]'>
      <Button className='w-full text-base' label='Book a table' onClick={() => {
        if (loggedIn) {

          setShowBook(true)
        }
        else {
          setAuthModalType(EAuthModalType.LOGIN);
          setIsOpenAuthModal(true);
        }
      }
      } />
      {showBook && <BookTable setShowBook={setShowBook} />}
    </div>
  );
};

export default RestaurantBookaTable;
