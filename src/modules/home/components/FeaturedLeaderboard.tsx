import Image from 'next/image';
import Link from 'next/link';
import { SlArrowRight } from "react-icons/sl";
import HomeBanner2 from '/public/svg/HomeBanner-2.svg';

interface IFeaturedLeaderboard {
  month?: string;
  className?: string;
}

export const FeaturedLeaderboard: React.FC<IFeaturedLeaderboard> = ({
  month = 'October',
  className = ''
}) => (
  <div className={`relative w-full overflow-hidden rounded-2xl ${className}`}>
    <Image src={HomeBanner2} alt='img' className='min-h-[424px] w-full object-cover' />

    <div className='absolute left-0 top-0 flex h-full w-full flex-col px-4 py-3'>
      <h2 className='font-bold-head text-4xl leading-[120%] text-white '>
        Top #10 <br />
        of {month}
      </h2>

      <Link href="/map" className='mt-auto flex gap-[4px] items-center self-end rounded-full bg-white/10 pl-[14px] pr-[4px] py-[6px] text-sm font-medium-disp text-white backdrop-blur-lg transition-all duration-200 hover:bg-white/20'>
        View all
        <SlArrowRight className='h-2.5 font-normal' />
      </Link>
    </div>
  </div>
);
