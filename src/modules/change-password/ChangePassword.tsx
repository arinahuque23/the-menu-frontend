'use client'
import Link from 'next/link';

import Header from '@/modules/home/components/Header';

import InfoIcon from '@/icons/InfoIcon';
import Input from '@/shared/components/ui/forms/inputs/Input';
import { EInputType } from '@/shared/enum/teaxtarea.enum';
import toast from 'react-hot-toast';

const ChangePassword = () => {
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
    <div className='container mx-auto pb-4'>
      <Header />
      <form className='mt-4' onSubmit={handleSubmit} >
        <Input type={EInputType.PASSWORD} label='Old password' placeholder='*  *  *  *  *  *  *  *' />
        <Link
          href='/forgot-password'
          className='font-poppins mb-6 mt-2 block text-end text-sm font-medium text-clr-red-0b'
        >
          Forgot password?{' '}
        </Link>
        <div className='mb-6'>
          <Input type={EInputType.PASSWORD} label='New password' placeholder='*  *  *  *  *  *  *  *' />
        </div>
        <Input type={EInputType.PASSWORD} label='Re-type password' placeholder='*  *  *  *  *  *  *  *' />
        <div className='mt-12'>
          <button type='submit' className='mb-4 w-full rounded-2xl bg-clr-red-0b p-3 font-semi-bold-disp text-white'>
            Update password
          </button>
          <Link
            href='/profile'
            className='block w-full rounded-2xl bg-clr-white-f5 p-3 text-center font-book-disp text-clr-brown-34'
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
