'use client';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { restaurantMenus } from '@/data/menus.data';
import Title from '@/shared/components/ui/title/Title';

const RestaurantMenu = () => {
  return (
    <div>
      <div className='px-5'>
        <Title
          titleRootClassName='pb-3'
          titleClassName='text-clr-black-01 font-semi-bold-disp text-[22px]'
          linkClassName=''
          title='Our menu'
          target='_blank'
          name='See all'
          link='/PDF.pdf'
        />
      </div>

      <ul >
        <Swiper slidesPerView={2.5} slidesOffsetAfter={20} slidesOffsetBefore={20} spaceBetween={13} freeMode={true} modules={[FreeMode]}>
          {restaurantMenus.map((items, index) => (
            <SwiperSlide key={index}>
              <li className='relative h-[220px]  overflow-hidden rounded-lg'>
                <Image
                  className='h-full w-full object-cover'
                  width={128}
                  height={160}
                  src={items.img}
                  alt='product-img'
                />
                <div className='absolute bottom-0 left-0 w-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_59.33%)] p-2'>
                  <h4 className='pb-1 font-semi-bold-disp text-white text-sm'>{items.name}</h4>
                  <button
                    type='button'
                    className='flex items-center justify-center rounded-3xl border border-white/15 bg-white/15 px-3 py-1 font-medium-body text-white backdrop-blur-[20px] text-xs'
                  >
                    ${items.price}
                  </button>
                </div>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
