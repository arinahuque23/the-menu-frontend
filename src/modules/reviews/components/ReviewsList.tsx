'use client'
import { reviews } from '@/data/reviews.data';
import CloseIcon from '@/icons/CloseIcon';
import RatingStar from '@/shared/components/ui/ratingstar/RatingStar';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import { FreeMode, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import Image from 'next/image';
import { useState } from 'react';

const ReviewsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <p className='mb-3 font-semi-bold-disp text-[22px] text-clr-black-01'>1245 Reviews</p>
      <ul>
        {reviews.map((items, index) => (
          <li
            key={index}
            className='mb-2 flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-clr-white-f5 p-3'
          >
            <div>
              <div className='flex items-center justify-between pb-3'>
                <div className='flex items-center gap-2'>
                  <RatingStar rating={items.rating} />
                </div>
                <p className='font-book-disp text-xs text-clr-gray-99'>{items.date}</p>
              </div>
              <div className='font-book-disp text-sm text-clr-brown-34'>
                {items.desc}
                {items?.images && (
                  <>
                    <ul className='flex gap-1 pt-2'>
                      {items?.images?.map((img, index) => (
                        <li key={index} onClick={({ index }: any) => {
                          setActiveIndex(index);
                          setIsOpen(true);
                        }}>
                          <Image width={40} height={40} src={img} alt='feedback-img' />
                        </li>
                      ))}
                    </ul>
                    {isOpen && (
                      <div className="fixed inset-0 z-50 bg-[#09080A] flex items-center justify-center">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="absolute left-5 top-4 z-50 p-2 text-white"
                        >
                          <CloseIcon fill="white" />
                        </button>

                        <Swiper
                          modules={[Keyboard, FreeMode]}
                          initialSlide={activeIndex}
                          slidesPerView={1}
                          centeredSlides
                          keyboard={{ enabled: true }}
                          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        >
                          {items?.images?.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="h-[374px]">

                                <img
                                  src={item}
                                  alt={`slide-${index}`}
                                  className="h-full w-full object-cover"
                                />

                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className='mt-4 flex items-center gap-1 overflow-hidden'>
              <Image className='object-cover' width={16} height={16} src={items.avatar} alt='avatar' />
              <p className='font-book-disp text-xs text-clr-gray-99'>{items.name}</p>
            </div>
          </li>
        ))}
      </ul>


    </div>
  );
};

export default ReviewsList;
