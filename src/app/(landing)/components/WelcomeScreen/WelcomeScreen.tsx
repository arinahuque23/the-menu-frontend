import CustomNavigation from '@/app/(landing)/components/WelcomeScreen/CustomNavigation';
import SliderSyncContent from '@/app/(landing)/components/WelcomeScreen/SliderSyncContent';
import { basedSliderContent } from '@/shared/type';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useAuthModal } from '@/context/AuthPopupContext';
import { EAuthModalType } from '@/modules/auth/enums/auth.enum';
import { cn } from '@/shared/utils/cn.utils';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import SwiperCore from 'swiper';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const WelcomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [closeIconVisible, setCloseIconVisible] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const { isOpenAuthModal, setIsOpenAuthModal, authModalType, setAuthModalType } = useAuthModal();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const authParam = searchParams.get('auth') as EAuthModalType;
    if (authParam === EAuthModalType.LOGIN || authParam === EAuthModalType.SIGNUP) {
      setAuthModalType(authParam);
      setIsOpenAuthModal(false);
    }
  }, [searchParams]);

  useEffect(() => {
    if (isOpenAuthModal) {
      router.replace(`/?auth=${authModalType}`, { scroll: false });
    } else {
      router.replace('/', { scroll: false });
    }
  }, [isOpenAuthModal, authModalType, router]);

  const handleCloseClick = () => {
    setCloseIconVisible(false);
    setActiveIndex(basedSliderContent.length - 1);
    if (swiperInstance) {
      swiperInstance.slideTo(basedSliderContent.length - 1);
    }
  };

  return (
    <div className='h-[718px]'>
      <div className='py-5'>
        <div className={cn(`'block' mb-2 flex justify-end px-5`)}>
          <button onClick={handleCloseClick}>
            {activeIndex === basedSliderContent.length - 1 ? (
              <div className='h-9'></div>
            ) : (
              <img className='rounded-xl bg-clr-white-fa p-3' src='/svg/close-icon.svg' alt='icon' />
            )}
          </button>
        </div>
        <Swiper
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={24}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          coverflowEffect={{
            rotate: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{
            nextEl: '.next-button'
          }}
          className='mb-4 w-full'
        >
          {basedSliderContent.map((content, index) => (
            <SwiperSlide
              key={index}
              className='flex h-[352px] w-[315px] justify-center overflow-hidden rounded-xl'
            >
              <Image
                width={315}
                height={352}
                src={content.sliderImage}
                className='object-fit h-full w-full'
                alt={`Slide ${index}`}
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderSyncContent activeIndex={activeIndex} />
        <CustomNavigation activeIndex={activeIndex} />
      </div>
    </div>
  );
};

export default WelcomeScreen;
