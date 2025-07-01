'use client';
import ReviewStarIcon from '@/icons/ReviewStarIcon';
import UploadIcon from '@/icons/UploadIcon';
import BottomModalHeading from '@/modules/bookings/components/BottomModalHeading';
import React, { useEffect, useRef, useState } from 'react';

interface IReviewModalProps {
  isOpenReviewModal: boolean;
  setIsOpenReviewModal: (show: boolean) => void;
  setIsOpenSuccessModal: (show: boolean) => void;
}

const ReviewModal: React.FC<IReviewModalProps> = ({
  isOpenReviewModal,
  setIsOpenReviewModal,
  setIsOpenSuccessModal
}) => {
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  useEffect(() => {
    if (isOpenReviewModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpenReviewModal]);

  return (
    <div className='container fixed left-1/2 top-0 z-[999999] mx-auto flex h-[100dvh] -translate-x-1/2 items-end justify-center bg-black/70 px-0 backdrop-blur-[2px]'>
      <div className='scrollbar-hide max-h-[95dvh] w-full overflow-y-scroll rounded-t-3xl border border-transparent bg-white'>
        <div className='sticky left-0 top-0 z-50 bg-white px-5 py-3'>
          <BottomModalHeading
            title='Leave a review'
            onClick={() => setIsOpenReviewModal(false)}
            customClass='mb-0'
          />
        </div>
        <div className='border-t border-clr-white-f5 px-5 pb-[93px] pt-3'>
          <div className='mb-5'>
            <div className='flex items-center gap-2'>
              {[...Array(5)].map((_, index) => (
                <button key={index} onClick={() => setRating(index + 1)} type='button'>
                  <ReviewStarIcon filled={index < rating} />
                </button>
              ))}
            </div>
          </div>
          <div className='mb-5'>
            <label
              htmlFor='impression'
              className='mb-2 block font-medium-disp text-base leading-[22px] text-clr-black-01'
            >
              Share your impression
            </label>
            <textarea
              name='impression'
              id='impression'
              placeholder='Start typing....'
              className='h-[92px] w-full resize-none rounded-xl border border-clr-white-e6 p-3 font-light-disp text-base text-clr-brown-34 placeholder:text-clr-brown-34 focus:outline-none'
            ></textarea>
          </div>
          <div>
            <label className='mb-2 block font-medium-disp text-base leading-[22px] text-clr-black-01'>
              Attach photo/video
            </label>

            <div
              onClick={() => fileRef.current?.click()}
              className='flex h-[68px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-[#B8B3B3]'
            >
              <input
                ref={fileRef}
                type='file'
                accept='image/*,video/*'
                onChange={handleFileChange}
                className='hidden'
              />
              {file ? (
                <span className='px-3 font-light-disp text-sm text-clr-brown-34'>{file.name}</span>
              ) : (
                <>
                  <UploadIcon />
                  <span className='font-light-disp text-sm text-clr-brown-34'>Upload media</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='border-t border-clr-white-f5 px-5 py-4'>
          <button
            onClick={() => {
              setIsOpenSuccessModal(true);
              setIsOpenReviewModal(false);
            }}
            className='mb-4 w-full rounded-2xl bg-clr-red-0b p-3 font-semi-bold-disp text-white'
          >
            Submit
          </button>
          <button
            onClick={() => setIsOpenReviewModal(false)}
            className='w-full rounded-2xl bg-clr-white-f5 p-3 font-book-disp text-clr-brown-34'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
