import CloseIcon from '@/icons/CloseIcon';
import React from 'react';

interface IHeadingProps {
  title: string;
  onClick: (showOff: boolean) => void;
  customClass?: string;
}

const BottomModalHeading: React.FC<IHeadingProps> = ({ title, onClick, customClass }) => {
  return (
    <div className={`mb-3 flex items-center justify-between gap-4 ${customClass}`}>
      <p className='font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>{title}</p>
      <button
        onClick={() => onClick(false)}
        className='flex size-8 items-center justify-center '
      >
        <CloseIcon fill='#000' />
      </button>
    </div>
  );
};

export default BottomModalHeading;
