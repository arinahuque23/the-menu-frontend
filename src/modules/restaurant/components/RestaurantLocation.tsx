'use client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import Title from '@/shared/components/ui/title/Title';
import { EResturantStatusType } from '@/shared/enum/status.enum';

import MostBookedimg from '/public/svg/HomeCard1.svg';

const MapView = dynamic(() => import('@/modules/map/components/MapView'), {
  ssr: false
});

const RestaurantLocation = () => {
  const router = useRouter();
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
  return (
    <div className='px-5'>
      <Title
        titleClassName='text-clr-black-01 font-semi-bold-disp text-[22px]'
        titleRootClassName='pb-3'
        title='Location'
      />
      <div
        onClick={() => router.push('/map-direction')}
        className='h-[184px] w-full max-w-[450px] overflow-hidden rounded-2xl'
      >
        <MapView copy restaurantsData={restaurantsData} />
      </div>
    </div>
  );
};

export default RestaurantLocation;
