'use client';
import { useState } from 'react';

import BookingDetails from '@/modules/bookings/components/BookingDetails';

import { bookingsData } from '@/data/bookings.data';
import EditBookings from '@/modules/bookings/components/EditBookings';
import Header from '@/modules/home/components/Header';
import RestaurantReportAccuracy from '@/modules/restaurant/components/RestaurantReportAccuracy';
import { Card } from '@/shared/components/ui';
import SuccessModal from '@/shared/components/ui/modal/SuccessModal';
import { useRouter } from 'next/navigation';

const Bookings = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false)
  const [successFullModal, setSuccessFullModal] = useState<boolean>(false);
  const [cancelModal, setCancelModal] = useState<boolean>(false);
  const [reportModal, setReportModal] = useState<boolean>(false);
  const router = useRouter()
  return (
    <div
      className={`container mx-auto flex flex-col pb-4 ${showDetails || showEdit ? 'h-[100dvh] overflow-hidden' : ''}`}
    >
      <Header showBackButton />
      <div className='mt-2'>
        <div className='mb-3 flex items-end justify-between gap-4'>
          {' '}
          <p className='font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>
            Upcoming bookings
          </p>
          <p className='font-roman-disp text-sm leading-[22px] text-clr-gray-99'>4 results</p>
        </div>
        {bookingsData.map((booking, index) => (
          <div key={index} onClick={(e) => {
            e.stopPropagation()
            setShowDetails(true)
          }}>
            <Card
              image={booking.image}
              status={booking.status}
              type={booking.type}
              title={booking.title}
              time={booking.time}
              date={booking.date}
              guestCount={booking.guestCount}
              cardRootClassName='mb-3'
              disableNavigation
            />
          </div>
        ))}
      </div>

      {showDetails && <BookingDetails setShowDetails={setShowDetails} setShowEdit={setShowEdit} setShowReportModal={setShowReportModal} />}
      {showEdit && <EditBookings setShowEdit={setShowEdit} setSuccessFullModal={setSuccessFullModal} setCancelModal={setCancelModal} />}
      {
        showReportModal && <div className='fixed h-[100dvh] flex w-full left-0 top-0 items-center justify-end bg-black/70 z-[9999] '>

          <RestaurantReportAccuracy closeReportAccuracyModal={() => setShowReportModal(false)} setReportModal={setReportModal} />
        </div>
      }
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
      {successFullModal && (
        <SuccessModal
          isOpen={successFullModal}
          onClick={() => router.push('/home')}
          onClose={() => setSuccessFullModal(false)}
          title='Booking has been changed'
          message='See you soon'
          buttonTitle='Go back to home'
        />
      )}
      {cancelModal && (
        <SuccessModal
          isOpen={cancelModal}
          onClick={() => router.push('/home')}
          onClose={() => setCancelModal(false)}
          title='Booking canceled'
          message='See you soon'
          buttonTitle='Go back to home'
        />
      )}
    </div>
  );
};

export default Bookings;
