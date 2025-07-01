'use client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const MapView = dynamic(() => import('@/modules/map/components/MapView'), {
  ssr: false
});

import { EResturantStatusType } from '@/shared/enum/status.enum';

import ArrowLeftIcon from '@/icons/ArrowLeftIcon';

import { Button } from '@/shared/components/ui';
import MostBookedimg from '/public/svg/HomeCard1.svg';

const MapDirection = () => {
  const router = useRouter();
  const [showDirection, setShowDirection] = useState(false);

  const restaurantsData = [
    {
      id: 1,
      image: MostBookedimg,
      status: EResturantStatusType.OPEN,
      type: 'Traditional',
      title: 'Han Tale Barbecue',
      avgPrice: 14,
      bookingsCount: 144,
      rating: 4.8,
      label: 'Menu',
      lat: 40.7,
      lng: -73.8
    }
  ];

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className=' relative flex h-[100dvh] flex-col gap-5 pb-5'>
      <button
        onClick={handleGoBack}
        className='absolute left-10 top-[60px] z-[9999] flex size-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#A0B3A8]'
      >
        <ArrowLeftIcon fill='#fff' />
      </button>
      <div className='relative h-full w-full'>
        <MapView restaurantsData={restaurantsData} showDirection={showDirection} showZoomControl />

        <div
          className='pointer-events-none absolute inset-0 z-[998]'
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 25%)'
          }}
        />
      </div>
      <div className='container'>
        <Button className='w-full text-base' label='  See direction' onClick={() => setShowDirection(true)} />
      </div>

    </div>
  );
};

export default MapDirection;
