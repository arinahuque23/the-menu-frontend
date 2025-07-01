import MinusIcon from '@/icons/MinusIcon';
import PlusIcon from '@/icons/PlusIcon';
import type { ChangeEvent } from 'react';

interface IGuestCountProps {
  availableSeats: number;
  setGuestCount: (count: number) => void;
  guestCount: number;
}

const GuestCount: React.FC<IGuestCountProps> = ({ availableSeats, setGuestCount, guestCount }) => {
  const handleIncrease = () => {
    setGuestCount(guestCount + 1);
  };

  const handleDecrease = () => {
    if (guestCount > 0) {
      setGuestCount(guestCount - 1);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      setGuestCount(0);
    }
    else if (!isNaN(Number(value))) {
      const numValue = parseInt(value, 10);
      if (numValue >= 0) {
        setGuestCount(numValue);
      }
    }
  };

  return (
    <div className='mb-3'>
      <p className='mb-3 font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>
        Number of guests
      </p>
      <div className='mb-2 flex items-center justify-between gap-4 rounded-2xl border border-clr-white-ed p-1'>
        <button
          onClick={handleDecrease}
          className='flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-clr-white-fa'
        >
          <MinusIcon />
        </button>
        <input
          type='number'
          min={0}
          value={guestCount || ''}
          onChange={handleInputChange}
          className='text-center font-roman-body text-xl leading-[24px] w-[150px] text-clr-black-01 outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]'
        />
        <button
          onClick={handleIncrease}
          className='flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-clr-white-fa'
        >
          <PlusIcon />
        </button>
      </div>
      <p
        className={`${guestCount > availableSeats ? 'text-clr-red-0b' : 'text-clr-gray-99'} font-light-disp text-sm`}
      >
        {availableSeats} seats available for this time
      </p>
    </div>
  );
};

export default GuestCount;