'use client';
import Image from 'next/image';

import { searchMenus } from '@/data/menus.data';

import FeaturedSection from '@/modules/home/components/FeaturedSection';
import Header from '@/modules/home/components/Header';

import SearchInput from '@/shared/components/ui/forms/inputs/SearchInput';
import RecentSearch from '@/shared/components/ui/Search/RecentSearch';

import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SearchResult = () => {
  const router = useRouter()
  return (
    <div>
      <div className='container'>
        <Header showBackButton />
        <SearchInput />
      </div>
      <div className=' !mb-6 !mt-2 '>
        <ul>
          <Swiper slidesPerView={2} slidesOffsetAfter={10} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]} breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            320: {
              slidesPerView: 2,
            },
            375: {
              slidesPerView: 2.2,
            },
            425: {
              slidesPerView: 2.5,
            },
            575: {
              slidesPerView: 3.4,
            },
          }}>
            {searchMenus.map((items, index) => (
              <SwiperSlide key={index} className='w-[160px]'>
                <li onClick={() => router.push('/map')} className='relative h-[200px] w-[160px] overflow-hidden rounded-lg'>
                  <Image
                    className='h-full  object-cover'
                    src={items.img}
                    layout='fill'
                    alt='product-img'
                  />
                  <div className='absolute bottom-0 left-0 w-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_59.33%)] p-2 '>
                    <h4 className='pb-1 font-semi-bold-disp text-white max-w-[134px] w-full leading-[22px] text-base'>{items.name}</h4>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
      <RecentSearch />

      <FeaturedSection title='We recommend' name='See all' link='/map' />
    </div>
  );
};

export default SearchResult;
