'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/shared/components/ui';
import BackButton from '@/shared/components/ui/backbutton/BackButton';

import { EButtonVarient } from '@/shared/enum/button.enum';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleResetPassword = () => {
    if (email.trim()) {
      router.push('/reset-password');
    }
  };


  return (
    <div className='container'>
      <div className='py-4'>
        <BackButton title='RESET PASSWORD' />
      </div>

      <div className='my-4 rounded-2xl border px-3 py-2'>
        <label htmlFor='email' className='font-black-body-normal text-xs text-clr-gray-99'>
          Email address
        </label>
        <input
          id='email'
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Type your email'
          className='w-full outline-none placeholder:font-book-disp text-base placeholder:text-clr-brown-4d'
        />
      </div>
      <p className='mb-10 font-black-body-normal text-xs text-clr-gray-99'>
        We will send an one time verification code to your email to verify you
      </p>
      <Button
        label='Send'
        variant={EButtonVarient.SOLID}
        onClick={handleResetPassword}
        disabled={!email.trim()}
        className='w-full rounded-2xl bg-clr-red-0b px-2 py-3 text-center text-base font-book-disp font-bold text-white'
      />
    </div>
  );
};

export default ForgotPassword;
