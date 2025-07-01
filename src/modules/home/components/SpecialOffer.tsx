'use client';
import Link from 'next/link';

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
          'flex flex-nowrap items-center justify-between rounded-2xl bg-clr-red-0b pt-6 pl-5 pr-3 pb-7',
          SpecialOfferRootClassName
        )}
      >
        <div className='w-full max-w-[189px]'>
          <h2 className='mb-[17px] font-bold-head text-[22px] leading-5 text-white'>Special offer</h2>
          <p className='font-light-disp text-sm  text-clr-brown-f3 mb-3.5'>
            Lorem ipsum dolor sit amet consectetur. Ultrices eget massa.
          </p>
          {label && (
            <Link
              href='/offers'
              className='inline-block rounded-lg bg-white px-4 py-2.5 font-book-disp text-sm text-clr-red-0b'
            >
              {label}
            </Link>
          )}
        </div>
        <div className='h-[100px] w-[100px] flex-shrink-0 overflow-hidden'>
          <Image width={100} height={100} src={'/svg/offer.svg'} alt='Offer' className='h-full w-full' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
