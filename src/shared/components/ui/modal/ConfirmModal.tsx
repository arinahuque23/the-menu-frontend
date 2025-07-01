'use client';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmModal: React.FC<IModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleGoHome = () => {
    onClose();
    router.push('/');
  };

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-[2px]'
      onClick={handleBackdropClick}
    >
      <div ref={modalRef} className='w-full max-w-[335px] rounded-[20px] bg-white p-6'>
        {isOpen && (
          <>
            <h2 className='mb-2 text-center font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>
              {title}
            </h2>
            <p className='mb-8 text-center font-book-disp text-base text-clr-black-01'>{message}</p>
            <div className='flex justify-center gap-4'>
              <button
                className='w-full rounded-2xl bg-clr-white-f5 px-4 py-2.5 font-book-disp text-base text-clr-brown-34'
                onClick={onClose}
              >
                No
              </button>
              <button
                className='w-full rounded-2xl bg-clr-white-f5 px-4 py-2.5 font-book-disp text-base text-clr-brown-34'
                onClick={onConfirm}
              >
                Yes
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmModal;
