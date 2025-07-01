'use client';
import Image from 'next/image';

import { useState, type Dispatch, type SetStateAction } from 'react';

import { sharePlatform } from '@/data/shareplatform.data';
import CloseIcon from '@/icons/CloseIcon';

import Title from '@/shared/components/ui/title/Title';

type TRestaurantShare = {
  setIsShareButton: Dispatch<SetStateAction<boolean>>;
};

const RestaurantShare: React.FC<TRestaurantShare> = ({ setIsShareButton }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('http://www.sample.org/head');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='fixed left-0  z-10 bottom-0 w-full'>
      <div className='rounded-t-3xl bg-white'>
        <div className='flex items-center justify-between gap-2 px-5 pb-3 pt-4'>
          <Title
            title='Share via'
            titleClassName='text-clr-black-01 font-semi-bold-disp text-xl text-nowrap'
          />
          <button onClick={() => setIsShareButton(false)} className=' p-2.5'>
            <CloseIcon fill={'#000'} />
          </button>
        </div>

        <ul className='flex items-center justify-between border-b border-b-clr-white-f5 p-5 pt-3'>
          {sharePlatform.map((i, index) => (
            <li key={`${i.name}-${index}`}>
              <button className='flex flex-col items-center'>
                <div className='mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50'>
                  <Image src={i.icon} alt={i.name} />
                </div>
                <p className='font-dm-sans text-xs capitalize text-clr-brown-67'>{i.name}</p>
              </button>
            </li>
          ))}
        </ul>

        <div className='px-5 py-6'>
          <div className='relative mb-4 rounded-2xl border px-3 py-2'>
            <label className='font-medium-body text-[10px] text-clr-gray-99'>Restaurant Link</label>
            <input
              type='text'
              readOnly
              placeholder='http://www.sample.org/head'
              className='w-full outline-none placeholder:font-book-disp text-base placeholder:text-clr-brown-4d '
            />
          </div>
          <button
            onClick={handleCopy}
            className='w-full rounded-2xl bg-clr-white-f5 px-2 py-3 font-book-disp text-base text-clr-brown-34'
          >
            {copied ? 'Copied' : 'Copy link'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantShare;
