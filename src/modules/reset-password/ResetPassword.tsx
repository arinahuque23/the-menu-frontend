'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/shared/components/ui';
import BackButton from '@/shared/components/ui/backbutton/BackButton';
import Input from '@/shared/components/ui/forms/inputs/Input';

import { EButtonVarient } from '@/shared/enum/button.enum';
import { EError } from '@/shared/enum/error.enum';
import { EInputType } from '@/shared/enum/teaxtarea.enum';

import toast from 'react-hot-toast';

const ResetPassword = () => {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleNewPassword = () => {
    if (!otp.trim()) {
      toast.error(EError.OTPERROR);
      return;
    }
    router.push('/new-password');
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <BackButton title='RESET PASSWORD' />
      </div>
      <div className='py-4'>
        <Input
          type={EInputType.CODE}
          placeholder='Enter the code'
          value={otp}
          onChange={setOtp}
          label='Enter the code'
        />
      </div>
      <p className='mb-10 ffont-black-body-normal text-xs text-clr-gray-99'>
        We will send a one time verification code to your email to verify you
      </p>
      <Button
        label='Submit'
        variant={EButtonVarient.SOLID}
        className='mb-10 w-full rounded-2xl bg-clr-red-0b px-2 py-3 text-center text-base font-book-disp font-bold text-white'
        disabled={!otp.trim()}
        onClick={handleNewPassword}
      />
      <button className='w-full rounded-2xl text-clr-brown-4d px-2 py-3 text-center text-base font-book-disp font-bold ' >Resend</button>
    </div>
  );
};

export default ResetPassword;
