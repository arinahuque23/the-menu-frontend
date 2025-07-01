'use client';

import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Title from '@/shared/components/ui/title/Title';
import { useParams } from 'next/navigation';

const RestaurantPhotosByGuest = () => {
  const params = useParams();

  return (
    <div className='px-5'>
      <Title
        title='Photos by guests'
        titleClassName='text-clr-black-01 font-semi-bold-disp text-[22px]'
        titleRootClassName='pb-3'
        name='See all'
        link={`/restaurant/${params.id}/photos`}
      />

      <div className='grid grid-cols-3 gap-1'>
        <div className='grid gap-1'>
          <div>
            <img className='h-full w-full rounded-lg' src='/images/grid-1.png' alt='ashiq' />
          </div>
          <div>
            <img className='h-full w-full rounded-lg' src='/images/grid-2.png' alt='ashiq' />
          </div>
        </div>

        <div className='grid gap-1'>
          <div>
            <img className='h-full w-full rounded-lg' src='/images/grid-3.png' alt='ashiq' />
          </div>

          <div>
            <img className='h-full w-full rounded-lg' src='/images/grid-4.png' alt='ashiq' />
          </div>
        </div>

        <div className='grid gap-1'>
          <div>
            <img className='h-full w-full rounded-lg' src='/images/grid-5.png' alt='ashiq' />
          </div>

          <Link href={`/restaurant/${params.id}/photos`}>
            <img className='h-full w-full rounded-lg' src='/images/grid-6.png' alt='ashiq' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPhotosByGuest;
