import CustomCalendar from '@/modules/bookings/components/Calender';
import GuestCount from '@/modules/bookings/components/GuestCount';
import TimePicker from '@/shared/components/ui/datetime/TimePicker';
import SuccessModal from '@/shared/components/ui/modal/SuccessModal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface IBottomModalProps {
  setShowBook: (showEdit: boolean) => void;
}

const BookTable: React.FC<IBottomModalProps> = ({ setShowBook }) => {
  const [guestCount, setGuestCount] = useState(16);
  const [availableSeats, setAvailableSeats] = useState(18);
  const [successFullModal, setSuccessFullModal] = useState<boolean>(false);
  const router = useRouter()
  return (
    <div className='container fixed left-1/2 top-0 !z-[99999] mx-auto flex h-[100dvh] -translate-x-1/2 items-end justify-center bg-black/70 px-0 backdrop-blur-[2px]'>
      <div className='scrollbar-hide max-h-[95dvh] w-full overflow-y-scroll rounded-t-3xl border border-transparent bg-white'>
        <div className='px-5 pt-6'>
          <CustomCalendar title='Select date' />
          <TimePicker />
          <GuestCount guestCount={guestCount} setGuestCount={setGuestCount} availableSeats={availableSeats} />
          <div className='mb-6'>
            <label className='mb-3 block font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>
              Comment or allergies
            </label>
            <textarea
              placeholder='Start typing...'
              className='h-[104px] w-full font-light-disp rounded-2xl border border-clr-ed p-3 text-base outline-none'
            />
          </div>
        </div>
        <div className='p-5 pb-6 shadow-bottomModal sticky bottom-0 left-0 bg-white z-50'>
          <button
            disabled={guestCount > availableSeats}
            onClick={() => setSuccessFullModal(true)}
            className='mb-4 w-full rounded-2xl bg-clr-red-0b p-3 font-semi-bold-disp text-white disabled:bg-clr-red-0b/20'
          >
            Confirm booking
          </button>
          <button
            onClick={() => setShowBook(false)}
            className='w-full rounded-2xl bg-clr-white-f5 p-3 font-book-disp text-clr-brown-34'
          >
            Cancel
          </button>
        </div>
      </div>
      {successFullModal && (
        <SuccessModal
          isOpen={successFullModal}
          onClick={() => router.push('/home')}
          onClose={() => setSuccessFullModal(false)}
          title='Booking confirmed'
          message='See you soon'
          buttonTitle='Go back to home'
        />
      )}
    </div>
  );
};

export default BookTable;
