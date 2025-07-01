'use client';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '@/shared/components/ui';

import { restaurantsData } from '@/data/restaurant.data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MostBooked = () => {
  return (
    <div>
      <Swiper
        freeMode={true}
        modules={[Pagination, FreeMode]}
        spaceBetween={12}
        slidesPerView={1.25}
        slidesOffsetAfter={20}
        slidesOffsetBefore={20}
        className='mySwiper'
      >
        {/* Most Booked Banner (First Slide) */}
        <SwiperSlide>
          <div
            className='relative h-[354px] overflow-hidden rounded-xl bg-cover bg-center'
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0.62%, rgba(182, 2, 11, 0) 53.01%, rgba(182, 2, 11, 0.9) 73.08%), url(/svg/BookOffer.jpg)`,
              backgroundPosition: '50%'
            }}
          >
            <div className='absolute bottom-0 rounded-b-xl p-4'>
              <div className=''>
                <h2 className='mb-3 font-bold-head text-[32px] leading-[14px] text-white'>Most Booked</h2>
                <p className='font-book-disp text-sm leading-5 text-white'>
                  Lorem ipsum dolor sit amet consectetur. Ultrices eget massa.
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Restaurant Cards */}
        {restaurantsData.map((restaurant) => (
          <SwiperSlide key={restaurant.id} className='pb-6'>
            <div className='h-full'>
              <Card
                image={restaurant.image}
                status={restaurant.status}
                type={restaurant.type}
                title={restaurant.title}
                avgPrice={restaurant.avgPrice}
                bookingsCount={restaurant.bookingsCount}
                label='Show Buttons'
                rating={restaurant.rating}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostBooked;
