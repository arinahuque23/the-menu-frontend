import Image from 'next/image';
import homebanner from '/public/images/homebanner.png';

const HomeBanner = () => {
  return (
    <div className='mb-6 pt-2 min-h-[361px]'>
      <Image src={homebanner} alt='homebanner' className='w-full object-cover  rounded-xl' />
    </div>
  );
};

export default HomeBanner;
