import FeaturedSection from '@/modules/home/components/FeaturedSection';
import SpecialOffer from '@/modules/home/components/SpecialOffer';
import RestaurantBookaTable from '@/modules/restaurant/components/RestaurantBookaTable';
import RestaurantDesc from '@/modules/restaurant/components/RestaurantDesc';
import RestaurantLocation from '@/modules/restaurant/components/RestaurantLocation';
import RestaurantMenu from '@/modules/restaurant/components/RestaurantMenu';
import RestaurantPhotosByGuest from '@/modules/restaurant/components/RestaurantPhotosByGuest';
import RestaurantReportAccuracy from '@/modules/restaurant/components/RestaurantReportAccuracy';
import RestaurantShare from '@/modules/restaurant/components/RestaurantShare';
import RestaurantTitleAvailable from '@/modules/restaurant/components/RestaurantTitleAvailable';
import RestaurantWorkingHours from '@/modules/restaurant/components/RestaurantWorkingHours';
import RestaurantReviews from '@/modules/restaurant/components/ReviewsSlider';
import SuccessModal from '@/shared/components/ui/modal/SuccessModal';

import type { TModal } from '@/shared/type';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type TRestaurantInfoProps = {
  shareModal: TModal;
  reportInaccuracyModal: TModal;
};

const RestaurantInfo: React.FC<TRestaurantInfoProps> = ({ shareModal, reportInaccuracyModal }) => {
  const router = useRouter()
  useEffect(() => {
    if (shareModal.isOpenModal || reportInaccuracyModal.isOpenModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [shareModal.isOpenModal, reportInaccuracyModal.isOpenModal]);

  const [reportModal, setReportModal] = useState<boolean>(false);
  return (
    <>
      {shareModal.isOpenModal ? (
        <RestaurantShare setIsShareButton={shareModal.closeModal} />
      ) : reportInaccuracyModal.isOpenModal ? (
        <RestaurantReportAccuracy closeReportAccuracyModal={reportInaccuracyModal.closeModal} setReportModal={setReportModal} />
      ) : (
        <div className='absolute z-10 -mt-6 w-full space-y-5 rounded-t-3xl bg-white pb-0 pt-6'>
          <RestaurantTitleAvailable />
          <RestaurantDesc />
          <RestaurantMenu />
          <SpecialOffer label='See all offers' rootSectionClassName='px-5' />
          <RestaurantReviews />
          <RestaurantPhotosByGuest />
          <RestaurantLocation />
          <RestaurantWorkingHours onReportClick={reportInaccuracyModal.openModal} />
          <FeaturedSection title='You might also like' featuredSectionRootClassName='py-0' />
          <RestaurantBookaTable />
        </div>
      )}
      {reportModal && (
        <SuccessModal
          isOpen={reportModal}
          onClick={() => router.push('/home')}
          onClose={() => setReportModal(false)}
          title='Thank you for your concern!'
          message=''
          buttonTitle='Go back to home'
        />
      )}
    </>
  );
};

export default RestaurantInfo;
