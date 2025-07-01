'use client';
import clsx from 'clsx';
import Image, { type StaticImageData } from 'next/image';
import type React from 'react';
import { useState } from 'react';

import Button from '@/shared/components/ui/button/Button';
import DateTime from '@/shared/components/ui/datetime/DateTime';
import { PriceLabel } from '@/shared/components/ui/label/PriceLabel';
import { EButtonVarient } from '@/shared/enum/button.enum';
import { EBookingStatusType, EBookingsType, EResturantStatusType } from '@/shared/enum/status.enum';
import { cn } from '@/shared/utils/cn.utils';

import HeartFillIcon from '@/icons/HeartFillIcon';
import HeartIcon from '@/icons/HeartIcon';
import StarIcon from '@/icons/StarIcon';
import { useRouter } from 'next/navigation';

interface IBookProps {
  image: string | StaticImageData;
  status: EBookingStatusType | EResturantStatusType | EBookingsType;
  type: string;
  guestCount?: number;
  title: string;
  rating?: number;
  avgPrice?: number;
  bookingsCount?: number;
  cardRootClassName?: string;
  time?: string;
  date?: string;
  label?: string;
  change?: string;
  favourite?: boolean;
  disableNavigation?: boolean;
  onChangeClick?: () => void;
  onMenuClick?: () => void;
  onBookClick?: () => void;
}
const Card: React.FC<IBookProps> = ({
  image,
  status = EBookingStatusType.CONFIRMED,
  type,
  guestCount,
  title,
  rating,
  avgPrice,
  bookingsCount,
  time,
  date,
  label,
  change,
  favourite,
  disableNavigation,
  onMenuClick,
  onBookClick,
  onChangeClick,
  cardRootClassName
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favourite);
  const router = useRouter();
  const getStatusColorClass = (status: EBookingStatusType | EResturantStatusType | EBookingsType): string => {
    const normalizedStatus = status.toLowerCase();
    if (
      normalizedStatus === EBookingStatusType.CONFIRMED ||
      normalizedStatus === EResturantStatusType.OPEN ||
      normalizedStatus === EBookingsType.CONFIRMED
    ) {
      return 'text-clr-green-2f';
    } else if (normalizedStatus === EBookingStatusType.VISITED) {
      return 'text-clr-yellow-600';
    } else if (
      normalizedStatus === EBookingStatusType.CANCEL ||
      normalizedStatus == EResturantStatusType.CLOSED ||
      normalizedStatus == EBookingsType.CANCELED
    ) {
      return 'text-clr-red-0b';
    } else {
      return 'text-clr-brown-34';
    }
  };
  const handleNavigateDetailsPage = () => {
    router.push('/restaurant/1');
  };
  return (
    <div
      onClick={!disableNavigation ? handleNavigateDetailsPage : undefined}
      className={cn(
        cardRootClassName,
        'shadow-card cursor-pointer overflow-hidden rounded-b-2xl rounded-t-xl'
      )}
    >
      <div
        className='relative w-full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='h-[212px] w-full overflow-hidden'>
          <Image
            src={image || '/placeholder.svg'}
            alt={title}
            className='h-full w-full rounded-t-xl object-cover'
            height={212}
            width={100}
          />
        </div>
        {/* {isHovered && ( */}
        <button onClick={(e) => {
          e.stopPropagation();
          setIsFavourite(!isFavourite);
        }} className='absolute right-3 top-3 flex size-7 cursor-pointer items-center justify-center rounded-lg border border-white border-opacity-20 bg-[#ffffff14] shadow-md backdrop-blur-lg'>
          {isFavourite ? <HeartFillIcon /> : <HeartIcon fill='white' />}
        </button>
        {/* )} */}
        <div className='px-2 pb-2 pt-3'>
          <div className='flex items-center gap-3'>
            <span
              className={clsx(
                'font-roman-disp text-sm capitalize leading-[16px]',
                getStatusColorClass(status)
              )}
            >
              {status}
            </span>
            <span className='border-l border-clr-white-e6 pl-3 font-light-disp text-sm capitalize leading-[16px] text-clr-brown-34'>
              {type}
            </span>
            {guestCount && (
              <span className='border-l border-clr-white-e6 pl-3 font-light-disp text-sm  leading-[16px] text-clr-brown-34'>
                {guestCount} guests
              </span>
            )}
          </div>
          <div className='mt-2 flex items-center justify-between'>
            <h3 className='font-medium-disp text-lg leading-[26px]'>{title}</h3>
            {rating && (
              <span className='flex items-center gap-[2px] font-medium-disp text-clr-black-01'>
                <StarIcon stroke='#B6020B' />
                {rating}
              </span>
            )}
          </div>
          <div className='mt-1 flex items-center justify-between font-light-disp text-sm text-clr-brown-67'>
            {avgPrice && (
              <div className='inline-flex items-center font-light-disp text-sm'>
                <PriceLabel price={avgPrice} /> average price
              </div>
            )}
            {bookingsCount && (
              <p className='font-light-disp text-sm text-clr-brown-67'>{bookingsCount} bookings</p>
            )}
          </div>
          {label && (
            <div className='mt-2 flex gap-2'>
              <Button
                label='Menu'
                variant={EButtonVarient.OUTLINE}
                onClick={onMenuClick}
                className='flex-1'
              />
              <Button label='Book' variant={EButtonVarient.SOLID} onClick={onBookClick} className='flex-1' />
            </div>
          )}
          {date && <DateTime date={date} time={time} change={change} onChangeClick={onChangeClick} />}
        </div>
      </div>
    </div>
  );
};
export default Card;
