'use client';

import { cn } from '@/shared/utils/cn.utils';
import Image from 'next/image';

interface ISpecialOfferProps {
  label?: string;
  SpecialOfferRootClassName?: string;
  rootSectionClassName?: string;
}

const SpecialOffer: React.FC<ISpecialOfferProps> = ({
  label,
  SpecialOfferRootClassName,
  rootSectionClassName
}) => {
  return (
    <section className={rootSectionClassName}>
      <div
        className={cn(
          'flex flex-nowrap items-center justify-between rounded-2xl bg-clr-red-0b p-4',
          SpecialOfferRootClassName
        )}
      >
        <div className='w-full max-w-[189px]'>
          <h2 className='mb-[17px] font-bold-head text-2xl leading-5 text-white'>Special offer</h2>
          <p className='font-light-disp text-xs  text-clr-brown-f3'>
            Lorem ipsum dolor sit amet consectetur. Ultrices eget massa.
          </p>

        </div>
        <div className='h-[64px] w-[64px] flex-shrink-0 overflow-hidden'>
          <Image width={64} height={64} src={'/svg/offer.svg'} alt='Offer' className='h-full w-full' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
