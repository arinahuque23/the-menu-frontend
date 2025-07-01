'use client';
import React from 'react';

import { Card } from '@/shared/components/ui';
import Title from '@/shared/components/ui/title/Title';

import { restaurantData } from '@/shared/type';
import { cn } from '@/shared/utils/cn.utils';

import { usePathname } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IFeaturedSection {
  title?: string;
  name?: string;
  link?: string;
  featuredSectionRootClassName?: string;
}

const FeaturedSection: React.FC<IFeaturedSection> = ({ title, link, name, featuredSectionRootClassName }) => {
  const router = usePathname();

  return (
    <div className={cn(featuredSectionRootClassName)}>
      <div className='container'>
        <Title title={title} link={link} name={name} />
      </div>
      <div>
        <Swiper slidesPerView={1.2} freeMode={true} modules={[FreeMode]}>
          {restaurantData.map((restaurant, index) => (
            <SwiperSlide key={index} className='pb-6 pl-3 pt-3 first:pl-5 last:pr-5'>
              <Card
                image={restaurant.image}
                status={restaurant.status}
                type={restaurant.type}
                title={restaurant.title}
                avgPrice={restaurant.avgPrice}
                bookingsCount={restaurant.bookingsCount}
                label={restaurant.label}
                rating={restaurant.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedSection;
