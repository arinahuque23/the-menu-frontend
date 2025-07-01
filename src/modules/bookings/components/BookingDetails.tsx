import dynamic from 'next/dynamic';
import { useState } from 'react';

import BottomModalHeading from '@/modules/bookings/components/BottomModalHeading';
import WorkingTime from '@/modules/bookings/components/WorkingTime';

import { Card } from '@/shared/components/ui';
import ConfirmModal from '@/shared/components/ui/modal/ConfirmModal';
import SuccessModal from '@/shared/components/ui/modal/SuccessModal';
import { EBookingsType, EResturantStatusType } from '@/shared/enum/status.enum';
import MostBookedimg from '/public/svg/HomeCard1.svg';

import HeadphoneIcon from '@/icons/HeadphoneIcon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const MapView = dynamic(() => import('@/modules/map/components/MapView'), {
  ssr: false
});

interface IBottomModalProps {
  setShowDetails: (showDetails: boolean) => void;
  setShowEdit: (showEdit: boolean) => void;
  setShowReportModal: (showEdit: boolean) => void;
}

const restaurantsData = [
  {
    id: 1,
    image: MostBookedimg,
    status: EResturantStatusType.OPEN,
    type: 'Traditional',
    title: 'Han Tale Barbecue',
    avgPrice: 14,
    bookingsCount: 144,
    rating: 4.8,
    label: 'Menu',
    lat: 40.7,
    lng: -73.8
  }
];

const BookingDetails: React.FC<IBottomModalProps> = ({ setShowDetails, setShowEdit, setShowReportModal }) => {
  const router = useRouter();
  const [cancelModal, setCancelModal] = useState<boolean>(false);
  const [successFullModal, setSuccessFullModal] = useState<boolean>(false);

  const onChangeClick = () => {
    setShowEdit(true);
    setShowDetails(false);
  };
  return (


    <div className='container fixed left-1/2 top-0 z-50 mx-auto flex h-[100dvh] -translate-x-1/2 items-end justify-center bg-black/70 px-0 backdrop-blur-[2px]'>
      <div className='scrollbar-hide max-h-[95dvh] w-full overflow-y-scroll rounded-t-3xl border border-transparent bg-white'>
        <div className='sticky left-0 top-0 z-50 bg-white px-5 py-3'>
          <BottomModalHeading title='Booking details' onClick={setShowDetails} />
        </div>
        <div className='px-5'>
          <div className='mb-4'>
            <Card
              image='/svg/HomeCard1.svg'
              status={EBookingsType.CONFIRMED}
              avgPrice={14}
              type='Traditional'
              title='Han Tale Barbecue'
              time='8:30PM'
              date='14 Feb 2025'
              change='Change'
              guestCount={12}
              onChangeClick={onChangeClick}
            />
          </div>
          <div onClick={() => router.push('/map-direction')} className='mb-4 h-[184px] overflow-hidden rounded-2xl'>
            <MapView copy restaurantsData={restaurantsData} />
          </div>
          <WorkingTime setShowReportModal={setShowReportModal} setShowDetails={setShowDetails} />
        </div>

        <div className='px-5 py-6 shadow-bottomModal'>
          <button className='mb-4 w-full rounded-2xl bg-clr-red-0b p-3 font-semi-bold-disp text-white'>
            Add to calendar
          </button>
          <div className='flex items-center gap-3'>
            <button
              onClick={() => setCancelModal(true)}
              className='w-full rounded-2xl bg-clr-white-f5 p-3 font-book-disp text-clr-brown-34'
            >
              Cancel booking
            </button>
            <Link href="/help-and-support" className='flex w-full items-center justify-center gap-1 rounded-2xl bg-clr-white-f5 p-3 font-book-disp text-clr-brown-34'>
              <HeadphoneIcon /> Contact us
            </Link>
          </div>
        </div>
      </div>
      {cancelModal && (
        <ConfirmModal
          isOpen={cancelModal}
          onClose={() => setCancelModal(false)}
          onConfirm={() => {
            setSuccessFullModal(true);
            setCancelModal(false);
          }}
          title='Cancel booking?'
          message='Are you sure you want to cancel this booking?'
        />
      )}
      {successFullModal && (
        <SuccessModal
          isOpen={successFullModal}
          onClick={() => router.push('/home')}
          onClose={() => setSuccessFullModal(false)}
          title='Booking canceled'
          message='Your booking has been canceled successfully.'
          buttonTitle='Go back to home'
        />
      )}
    </div>


  );
};

export default BookingDetails;
