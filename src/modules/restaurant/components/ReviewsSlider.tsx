'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { EButtonVarient } from '@/shared/enum/button.enum';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { reviews } from '@/data/reviews.data';

import { Button } from '@/shared/components/ui';
import SuccessModal from '@/shared/components/ui/modal/SuccessModal';
import RatingStar from '@/shared/components/ui/ratingstar/RatingStar';
import Title from '@/shared/components/ui/title/Title';

import ReviewModal from '@/modules/restaurant/components/ReviewModal';

const ReviewsSlider = () => {
  const params = useParams();
  const [isOpenReviewModal, setIsOpenReviewModal] = useState<boolean>(false);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState<boolean>(false);

  return (
    <div>
      <div className='px-5'>
        <Title
          titleClassName='text-clr-black-01 font-semi-bold-disp text-[22px]'
          titleRootClassName='pb-3'
          title='Reviews'
          name='See all'
          link={`/restaurant/${params.id}/reviews`}
        />
      </div>

      <ul className='mb-3'>
        <Swiper slidesPerView={'auto'} spaceBetween={8} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]} className='w-full'>
          {reviews.map((items, index) => (
            <SwiperSlide key={index} className='!w-[262px]'>
              <li className='flex h-[146px] w-full max-w-full flex-col justify-between overflow-hidden rounded-2xl border border-clr-white-f5 p-3'>
                <div>
                  <div className='flex items-center justify-between pb-3'>
                    <div className='flex items-center gap-2'>
                      <RatingStar rating={items.rating} />
                    </div>
                    <p className='font-book-disp text-xs text-clr-gray-99'>{items.date}</p>
                  </div>
                  <p className='pb-4 font-book-disp text-sm text-clr-brown-34'>{items.desc}</p>
                </div>

                <div className='flex items-center gap-1 overflow-hidden'>
                  <Image className='object-cover' width={16} height={16} src={items.avatar} alt='avatar' />
                  <p className='font-book-disp text-xs text-clr-gray-99'>{items.name}</p>
                </div>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>

      <div className='px-5'>
        <Button
          onClick={() => setIsOpenReviewModal(true)}
          label='Leave a review'
          className='w-full font-medium-disp text-sm'
          variant={EButtonVarient.OUTLINE}
        />
      </div>

      {isOpenReviewModal && (
        <ReviewModal
          isOpenReviewModal={isOpenReviewModal}
          setIsOpenReviewModal={setIsOpenReviewModal}
          setIsOpenSuccessModal={setIsOpenSuccessModal}
        />
      )}
      {isOpenSuccessModal && (
        <SuccessModal
          isOpen={isOpenSuccessModal}
          onClick={() => setIsOpenSuccessModal(false)}
          onClose={() => setIsOpenSuccessModal(false)}
          title='Review uploaded!'
          message='Your feedback will be posted soon'
          buttonTitle='Okay'
        />
      )}
    </div>
  );
};

export default ReviewsSlider;
