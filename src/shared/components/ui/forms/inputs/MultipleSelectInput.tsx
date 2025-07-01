'use client';
import { useEffect, useRef, useState } from 'react';

import DownArrowIcon from '@/icons/DownArrowIcon';
import UpArrowIcon from '@/icons/UpArrowIcon';

interface IMultipleSelectInputProps {
  label?: string;
  options: string[];
  selectedOptions?: string[];
  onChange?: (selected: string[]) => void;
  className?: string;
  note?: boolean;
}

const MultipleSelectInput: React.FC<IMultipleSelectInputProps> = ({
  label = 'Sort by',
  options,
  selectedOptions = [],
  onChange,
  className = '',
  note
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState<string[]>(selectedOptions);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setSelected(selectedOptions);
  }, [selectedOptions]);

  useEffect(() => {
    if (showOptions && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [showOptions]);

  const toggleOption = (option: string) => {
    let updated = [...selected];

    const isPriceLow = option === 'Price (Low - High)';
    const isPriceHigh = option === 'Price (High - Low)';

    const alreadySelected = updated.includes(option);

    if (alreadySelected) {
      updated = updated.filter((item) => item !== option);
    } else {
      if (isPriceLow) {
        updated = updated.filter((item) => item !== 'Price (High - Low)');
      } else if (isPriceHigh) {
        updated = updated.filter((item) => item !== 'Price (Low - High)');
      }
      updated.push(option);
    }

    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <div className={`rounded-2xl border border-clr-white-e6 transition-all ${className}`}>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className='flex cursor-pointer items-center justify-between gap-4 p-3'
      >
        <p className='font-medium-disp text-base text-clr-black-01'>
          {label}{' '}
          {note && selected.length <= 1 && (
            <span className='ml-2 font-light-disp text-xs text-clr-brown-67'>Select 1 or more options</span>
          )}
        </p>

        <span className={`transition-transform duration-300`}>
          {showOptions ? <UpArrowIcon /> : <DownArrowIcon />}
        </span>
      </div>

      <div className='overflow-hidden transition-all duration-300' style={{ height: `${height}px` }}>
        <div
          ref={contentRef}
          className='flex flex-wrap items-center gap-2 border-t border-clr-white-f5 px-2 py-3'
        >
          {options.map((item, index) => (
            <button
              key={index}
              type='button'
              onClick={() => toggleOption(item)}
              className={`rounded-full border px-3 py-1.5 font-light-disp text-sm tracking-[1px] ${selected.includes(item)
                  ? 'border-clr-red-0b bg-clr-red-0b text-white'
                  : 'border-clr-white-f5 text-clr-brown-34'
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultipleSelectInput;
