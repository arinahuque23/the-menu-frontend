'use client';

import React, { useEffect, useRef } from 'react';

interface IConfirmModalProps {
  isOpen: boolean;
  onClick: () => void;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonTitle?: string;
}

const SuccessModal: React.FC<IConfirmModalProps> = ({
  isOpen,
  onClick,
  onClose,
  title = 'Booking canceled',
  message = 'Your booking has been canceled successfully.',
  buttonTitle = 'Go to the home page'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node) && onClose) {
      onClose();
    }
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose?.();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className='fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-[2px]'
        onClick={handleBackdropClick}
      >
        <div ref={modalRef} className='w-full max-w-[335px] rounded-[20px] bg-white p-6'>
          <h2 className='mb-2 text-center font-semi-bold-disp text-[22px] leading-[30px]'>{title}</h2>
          <p className='mb-8 text-center font-book-disp text-base text-clr-black-01'>{message}</p>
          <div className='flex justify-center'>
            <button
              className='w-full rounded-2xl bg-clr-white-f5 px-4 py-2.5 font-book-disp text-base text-clr-brown-34'
              onClick={onClick}
            >
              {buttonTitle}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
