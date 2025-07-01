'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface IRadioInputProps {
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const RadioInput: React.FC<IRadioInputProps> = ({ label, defaultChecked = false, onChange, className }) => {
  const [checked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div
      onClick={handleToggle}
      className={clsx(
        'flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-clr-white-e6 p-3',
        className
      )}
    >
      <span className='font-medium-disp text-base text-clr-black-01'>{label}</span>

      <input type='checkbox' checked={checked} onChange={handleToggle} className='hidden' />

      <div className='flex size-4 items-center justify-center rounded-full border border-clr-red-0b'>
        {checked && <div className='size-2.5 rounded-full bg-clr-red-0b' />}
      </div>
    </div>
  );
};

export default RadioInput;
