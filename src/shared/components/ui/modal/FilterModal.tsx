'use client';

import BottomModalHeading from '@/modules/bookings/components/BottomModalHeading';
import DoubleRangeSlider from '@/shared/components/ui/forms/inputs/DoubleRangeSlider';
import MultipleSelectInput from '@/shared/components/ui/forms/inputs/MultipleSelectInput';
import RadioInput from '@/shared/components/ui/forms/inputs/RadioInput';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IFilterModalProps {
  setShowFilter: (show: boolean) => void;
}

const FilterModal: React.FC<IFilterModalProps> = ({ setShowFilter }) => {
  const [sortBy, setSortBy] = useState<string[]>([]);
  const [sortByCui, setSortByCui] = useState<string[]>([]);
  const [openNow, setOpenNow] = useState(false);
  const [availableForBooking, setAvailableForBooking] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const router = useRouter()
  const handleClearAll = () => {
    setSortBy([]);
    setSortByCui([]);
    setOpenNow(false);
    setAvailableForBooking(false);
    setPriceRange([0, 500]);
  };

  const redirectToMap = () => {
    setShowFilter(false)
    router.push('/map')
  }

  return (
    <div className='container fixed left-1/2 top-0 z-[99998] mx-auto flex h-[100dvh] -translate-x-1/2 items-end justify-center bg-black/70 px-0 backdrop-blur-[2px]'>
      <div className='scrollbar-hide max-h-[95dvh] w-full overflow-y-scroll rounded-t-3xl border border-transparent bg-white'>
        <div className='sticky left-0 top-0 z-50 bg-white py-3 pl-5 pr-[22px]'>
          <BottomModalHeading title='Filters' onClick={() => setShowFilter(false)} />
        </div>
        <form>
          <div className='px-5 pb-3'>
            <MultipleSelectInput
              label='Sort by'
              options={['Rating', 'Price (Low - High)', 'Newest', 'Price (High - Low)', 'Number of reviews']}
              selectedOptions={sortBy}
              onChange={setSortBy}
              className='mb-2'
            />
            <RadioInput
              label='Open now'
              defaultChecked={openNow}
              onChange={setOpenNow}
              className='mb-2'
            />
            <RadioInput
              label='Available for booking'
              defaultChecked={availableForBooking}
              onChange={setAvailableForBooking}
              className='mb-2'
            />
            <DoubleRangeSlider
              value={priceRange}
              onChange={setPriceRange}
            />
            <MultipleSelectInput
              label='Cuisine'
              options={[
                'Asian',
                'Traditional',
                'Europian',
                'American',
                'French',
                'Thai',
                'Seafood',
                'Vietnamese'
              ]}
              note={true}
              selectedOptions={sortByCui}
            />
          </div>

          <div className='sticky bottom-0 left-0 z-50 border-t border-clr-white-f5 bg-white px-5 py-4'>
            <button
              type='button'
              onClick={redirectToMap}
              className='mb-4 w-full rounded-2xl bg-clr-red-0b p-3 font-semi-bold-disp text-white'
            >
              Apply
            </button>

            <button
              type='button'
              onClick={handleClearAll}
              className='w-full rounded-2xl bg-clr-white-f5 p-3 font-book-disp text-clr-brown-34'
            >
              Clear all
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;