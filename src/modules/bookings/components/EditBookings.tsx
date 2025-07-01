import BottomModalHeading from '@/modules/bookings/components/BottomModalHeading';
import CustomCalendar from '@/modules/bookings/components/Calender';
import GuestCount from '@/modules/bookings/components/GuestCount';

import TimePicker from '@/shared/components/ui/datetime/TimePicker';
import { useState } from 'react';

interface IBottomModalProps {
  setShowEdit: (showEdit: boolean) => void;
  setSuccessFullModal: (showEdit: boolean) => void;
  setCancelModal: (showEdit: boolean) => void;
}

const EditBookings: React.FC<IBottomModalProps> = ({ setShowEdit, setSuccessFullModal, setCancelModal }) => {
  const [guestCount, setGuestCount] = useState(16);
  const [availableSeats, setAvailableSeats] = useState(18);
  return (
    <div className='container fixed left-1/2 top-0 z-[9999] mx-auto flex h-[100dvh] -translate-x-1/2 items-end justify-center bg-black/70 px-0 backdrop-blur-[2px]'>
      <div className='scrollbar-hide max-h-[95dvh] w-full overflow-y-scroll rounded-t-3xl border border-transparent bg-white'>
        <div className='sticky left-0 top-0 z-50 bg-white px-5 py-3'>
          <BottomModalHeading title='Edit booking' onClick={setShowEdit} />
        </div>
        <div className='px-5'>
          <CustomCalendar title-='Date' />
          <TimePicker />
          <GuestCount guestCount={guestCount} setGuestCount={setGuestCount} availableSeats={availableSeats} />
        </div>
        <div className='px-5 py-6 shadow-bottomModal'>
          <button onClick={() => {
            setSuccessFullModal(true)
            setShowEdit(false)
          }} className='mb-4 w-full rounded-2xl bg-clr-red-0b p-3 font-semi-bold-disp text-white'>
            Update
          </button>
          <button onClick={() => {
            setCancelModal(true)
            setShowEdit(false)
          }} className='w-full rounded-2xl bg-clr-white-f5 p-3 font-book-disp text-clr-brown-34'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBookings;
