'use client';

import Image from 'next/image';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import HeartIcon from '@/icons/HeartIcon';
import ShareIcon from '@/icons/ShareIcon';

import HeartFillIcon from '@/icons/HeartFillIcon';
import type { TModal } from '@/shared/type';
import { useState } from 'react';

type TRestaurantBannerProps = {
  shareModal: TModal;
  reportInaccuracyModal: TModal;
};

const RestaurantBanner: React.FC<TRestaurantBannerProps> = ({ shareModal, reportInaccuracyModal }) => {
  const [favorite, setFavorite] = useState(false)
  return (
    <div className='relative h-full w-full overflow-hidden'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {[1, 2, 3, 4, 5, 6].map((data, index) =>
          <SwiperSlide key={index}>
            <div className='relative h-[484px] w-full'>
              <Image
                className='h-full w-full object-cover'
                width={375}
                height={484}
                src={'/images/establishment-banner.png'}
                alt='establishment-banner'
              />

              {(shareModal.isOpenModal || reportInaccuracyModal.isOpenModal) && (
                <div className='absolute left-0 top-0 z-10 h-full w-full bg-black opacity-70'></div>
              )}
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {(!shareModal.isOpenModal || reportInaccuracyModal.isOpenModal) && (
        <div className='absolute right-5 top-5 z-10  '>
          <button onClick={() => setFavorite(!favorite)} className='size-9 flex items-center justify-center bg-clr-white-f5 border border-[#ffffff14] rounded-[10px] mb-2'>{favorite ? <HeartFillIcon /> : <HeartIcon fill='#120001' />}</button>
          <button onClick={shareModal.openModal} className='size-9 flex items-center justify-center bg-clr-white-f5 border border-[#ffffff14] rounded-[10px]'><ShareIcon fill='#120001' /></button>
        </div>
      )}
    </div>
  );
};

export default RestaurantBanner;
