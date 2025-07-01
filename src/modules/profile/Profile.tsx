'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegEyeSlash } from 'react-icons/fa';

import CameraIcon from '@/icons/CameraIcon';
import InfoIcon from '@/icons/InfoIcon';
import OpenEyeIcon from '@/icons/OpenEyeIcon';

import Header from '@/modules/home/components/Header';

import InputField from '@/shared/components/ui/forms/inputs/InputField';
import Teaxtarea from '@/shared/components/ui/forms/inputs/Teaxtarea';
import ConfirmModal from '@/shared/components/ui/modal/ConfirmModal';

const Profile = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const initialFormData = {
    bio: '',
    fName: '',
    lName: '',
    email: '',
    phone: '',
    file: null as File | null,
    imageUrl: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const url = URL.createObjectURL(selectedFile);
      setFormData((prev) => ({
        ...prev,
        file: selectedFile,
        imageUrl: url
      }));
    }
  };

  const isFormValid = Object.entries(formData).some(([key, value]) => {
    const initialValue = initialFormData[key as keyof typeof initialFormData];

    if (key === 'file') {
      return (value as File | null)?.name !== (initialValue as File | null)?.name;
    }

    return value !== initialValue;
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      toast.success('Information has been updated successfully!', {
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
    }
  };

  return (
    <div className='container mx-auto pb-4'>
      <Header showBackButton />
      <form onSubmit={handleSubmit} className='mt-4'>
        <div className='mb-4 text-center'>
          <div
            onClick={() => fileRef.current?.click()}
            className='mx-auto mb-3 flex size-[104px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-clr-white-fa'
          >
            <input
              ref={fileRef}
              type='file'
              accept='image/*'
              onChange={handleFileChange}
              className='hidden'
            />
            {formData.imageUrl ? (
              <Image
                className='size-full object-cover'
                src={formData.imageUrl}
                alt='profile'
                width={104}
                height={104}
              />
            ) : (
              <CameraIcon />
            )}
          </div>
          <p className='font-medium-disp text-xl text-clr-black-01'>Leonardo Dicaprio</p>
        </div>

        <div className='mb-6'>
          <Teaxtarea
            label='Bio'
            placeholder='Add a bio....'
            value={formData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
          />
        </div>


        <div className='mb-5 flex items-center gap-3'>
          <InputField
            label='First name'
            name='fName'
            placeholder='Leonardo'
            value={formData.fName}
            onChange={(e) => handleInputChange('fName', e.target.value)}
          />
          <InputField
            label='Last name'
            name='lName'
            placeholder='Dicaprio'
            value={formData.lName}
            onChange={(e) => handleInputChange('lName', e.target.value)}
          />
        </div>

        <InputField
          label='Email'
          name='email'
          type='email'
          placeholder='youremail@email.com'
          className='mb-5'
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <InputField
          label='Phone number'
          name='phone'
          type='tel'
          placeholder='+1 234 567 8910'
          className='mb-5'
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />

        <div className='mb-6 w-full'>
          <label
            htmlFor='password'
            className='mb-2 block font-roman-disp text-base leading-[22px] text-clr-black-01'
          >
            Password
          </label>
          <div className='flex w-full items-center gap-4 rounded-xl border border-clr-white-e6 p-1.5 pl-3'>
            <input
              id='password'
              name='password'
              readOnly
              type={showPassword ? 'text' : 'password'}
              value={'testpassword'}
              placeholder='*  *  *  *  *  *  *  *'
              className='w-full font-light-disp text-base text-clr-brown-34 outline-none placeholder:text-clr-brown-34'
            // value={formData.password}
            // onChange={(e) => handleInputChange('password', e.target.value)}
            />

            <button
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <FaRegEyeSlash className='text-2xl text-clr-brown-34' />
              ) : (
                <OpenEyeIcon fill='#413334' />
              )}
            </button>

            <Link
              href='/change-password'
              className='rounded-lg border border-clr-red-0b px-3 py-2 font-roman-disp text-xs text-clr-red-0b'
            >
              Change
            </Link>
          </div>
        </div>

        <div className='mb-6 flex items-center justify-center gap-1 text-clr-gray-99 font-book-disp text-base'>
          <p >Do you want to </p>
          <button type='button' onClick={() => setShowDeleteModal(true)} >
            delete your account?
          </button>
        </div>

        <button
          disabled={!isFormValid}
          type='submit'
          className='mb-4 w-full rounded-2xl bg-clr-red-0b p-3 font-semi-bold-disp text-white disabled:bg-clr-red-0b/20'
        >
          Save
        </button>
      </form>

      {showDeleteModal && (
        <ConfirmModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => setShowDeleteModal(false)}
          title='Delete account'
          message='Are you sure want to delete your account?'
        />
      )}
    </div>
  );
};

export default Profile;
