'use client';

import { useState } from 'react';

import { Button } from '@/shared/components/ui';
import BackButton from '@/shared/components/ui/backbutton/BackButton';

import { EButtonType, EButtonVarient } from '@/shared/enum/button.enum';

import InfoIcon from '@/icons/InfoIcon';
import toast from 'react-hot-toast';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { VscEyeClosed } from 'react-icons/vsc';

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success('The password has been updated successfully', {
      icon: <InfoIcon />,
      style: {
        borderRadius: '8px',
        background: '#E5F7EA',
        color: '#00B12F',
        fontSize: '14px',
        lineHeight: '20px',
        fontFamily: 'Sequel Sans Book Disp'
      }
    });

  };

  return (
    <div className='container'>
      <div className='py-4'>
        <BackButton title='RESET PASSWORD' />
      </div>
      <form onSubmit={handleSubmit} >

        <div className='py-4'>
          <div className='relative mb-6 rounded-2xl border px-3 py-2'>
            <label htmlFor='NewPassword' className='font-black-body-normal text-xs text-clr-gray-99'>
              New password
            </label>
            <input
              id='NewPassword'
              type={showPassword ? 'text' : 'password'}
              placeholder='****************'
              className='w-full outline-none placeholder:font-book-disp text-base placeholder:text-clr-brown-4d'
            />
            <button
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-xl text-clr-brown-4d focus:outline-none'
            >
              {showPassword ? <VscEyeClosed /> : <MdOutlineRemoveRedEye />}
            </button>
          </div>

          <div className='relative mb-6 rounded-2xl border px-3 py-2'>
            <label htmlFor='RetypePassword' className='font-black-body-normal text-xs text-clr-gray-99'>
              Re-type password
            </label>
            <input
              id='RetypePassword'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='****************'
              className='w-full outline-none placeholder:font-book-disp text-base placeholder:text-clr-brown-4d'
            />
            <button
              type='button'
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-xl text-clr-brown-4d focus:outline-none'
            >
              {showConfirmPassword ? <VscEyeClosed /> : <MdOutlineRemoveRedEye />}
            </button>
          </div>
        </div>
        <Button label='Save' type={EButtonType.SUBMIT} variant={EButtonVarient.SOLID} className='w-full rounded-2xl bg-clr-red-0b px-2 py-3 text-center text-base font-book-disp font-bold text-white' />
      </form>

    </div>
  );
};

export default NewPassword;
