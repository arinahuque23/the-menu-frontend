'use client';
import useModal from '@/hooks/useModal';

import Header from '@/modules/home/components/Header';
import RestaurantBanner from '@/modules/restaurant/components/RestaurantBanner';
import RestaurantInfo from '@/modules/restaurant/components/RestaurantInfo';

const RestaurantDetails = () => {
  const shareModal = useModal();
  const reportInaccuracyModal = useModal();

  return (
    <div className='container px-0'>
      <div className='container'>
        <Header showBackButton />
      </div>
      <div className='relative h-full'>
        <RestaurantBanner shareModal={shareModal} reportInaccuracyModal={reportInaccuracyModal} />
        <RestaurantInfo shareModal={shareModal} reportInaccuracyModal={reportInaccuracyModal} />
      </div>
    </div>
  );
};

export default RestaurantDetails;
