import { useState } from 'react';

import { RestaurantReportAccuracyOptions } from '@/data/reportaccuracyoptions.data';

import CheckIcon from '@/icons/CheckIcon';
import { Button } from '@/shared/components/ui';
import Title from '@/shared/components/ui/title/Title';

type TRestaurantReportAccuracyProps = {
  closeReportAccuracyModal: () => void;
  setReportModal: (show: boolean) => void
};

const RestaurantReportAccuracy: React.FC<TRestaurantReportAccuracyProps> = ({ closeReportAccuracyModal, setReportModal }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [otherText, setOtherText] = useState('');


  const handleToggle = (value: string) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  return (
    <div className='fixed left-0   bottom-0 w-full z-[9999]'>
      <div className='rounded-t-3xl bg-white '>
        <div className='flex items-center justify-between gap-2 px-5 pb-3 pt-4'>
          <Title
            title='Report inaccuracy'
            titleClassName='text-clr-black-01 font-semi-bold-disp text-xl text-nowrap'
          />
        </div>

        <ul className='px-8 py-2 font-book-disp text-base text-clr-black-01'>
          {RestaurantReportAccuracyOptions.map((label, index) => (
            <li key={`${label}_${index}`} className='pb-4 last:pb-0'>
              <label className='flex cursor-pointer items-center gap-2'>
                <div className='relative inline-block h-4 w-4'>
                  <input
                    type='checkbox'
                    checked={selected.includes(label)}
                    onChange={() => handleToggle(label)}
                    className='peer absolute z-10 h-full w-full cursor-pointer opacity-0'
                  />
                  <span className='absolute left-0 top-0 h-full w-full rounded border border-clr-red-0b bg-white peer-checked:border-clr-red-0b peer-checked:bg-clr-red-0b'>
                    <span className='peer-checked:bg-clr-red-0b peer-checked:transition-all'>
                      <CheckIcon
                        SVGIconClassName='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                        fill='white'
                      />
                    </span>
                  </span>
                </div>

                {label}
              </label>

              {/* Show textarea only when "Other" is selected */}
              {label === 'Other' && selected.includes('Other') && (
                <textarea
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                  placeholder='Please specify'
                  className='mt-2 h-[104px] w-full rounded-2xl border border-clr-ed p-3 text-base outline-none'
                />
              )}
            </li>
          ))}
        </ul>

        <div className='mt-3 border-t border-clr-white-f5 px-5 py-6'>
          <Button onClick={() => {
            closeReportAccuracyModal
            setReportModal(true)
          }} label='Report now' className='mb-4 w-full rounded-2xl py-3 font-semi-bold-disp text-base' />
          <Button
            onClick={closeReportAccuracyModal}
            label='Cancel'
            className='w-full rounded-2xl bg-clr-white-f5 py-3 font-book-disp text-base text-clr-brown-34'
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantReportAccuracy;
