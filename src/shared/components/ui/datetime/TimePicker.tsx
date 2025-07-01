'use client';

import { ETimeFormat } from '@/shared/enum/time.enum';
import React, { useEffect, useRef, useState } from 'react';

const TimePicker: React.FC = () => {
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const periods = [ETimeFormat.AM, ETimeFormat.PM];

  const ITEM_HEIGHT = 40;
  const VISIBLE_ITEMS = 5;
  const PADDING = ((VISIBLE_ITEMS - 1) / 2) * ITEM_HEIGHT;

  const [selectedHour, setSelectedHour] = useState(9);
  const [selectedMinute, setSelectedMinute] = useState(45);
  const [selectedPeriod, setSelectedPeriod] = useState(ETimeFormat.AM);

  const renderList = <T extends string | number>(
    list: T[],
    selected: T,
    setSelected: (val: T) => void,
    rounded: 'left' | 'right' | 'none' = 'none'
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const scrollHandler = () => {
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollTop;
      const index = Math.round(scrollTop / ITEM_HEIGHT);
      const item = list[index];
      if (item !== selected) {
        setSelected(item);
      }
    };

    useEffect(() => {
      const index = list.findIndex((i) => i === selected);
      if (containerRef.current) {
        const scrollPos = index * ITEM_HEIGHT;
        containerRef.current.scrollTo({ top: scrollPos, behavior: 'smooth' });
      }
    }, [selected]);

    const borderRadius = rounded === 'left' ? 'rounded-l-lg' : rounded === 'right' ? 'rounded-r-lg' : '';

    return (
      <div className='relative w-1/3'>
        {/* Highlight Line */}
        <div
          className={`pointer-events-none absolute left-0 top-[80px] z-10 h-[40px] w-full bg-clr-white-f5 ${borderRadius}`}
        />

        {/* Scrollable List */}
        <div
          ref={containerRef}
          className='scrollbar-hide h-[200px] w-full overflow-y-auto'
          style={{ paddingTop: PADDING, paddingBottom: PADDING }}
          onScroll={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(scrollHandler, 100);
          }}
        >
          {list.map((item, idx) => {
            const index = list.indexOf(selected);
            const diff = Math.abs(idx - index);

            let textSize = 'text-[16px]';
            let fontWeight = '';
            let textColor = 'text-clr-brown-67';

            if (diff === 0) {
              textSize = 'text-[20px]';
              fontWeight = 'font-semibold';
              textColor = 'text-clr-black-01';
            } else if (diff === 1) {
              textSize = 'text-[18px]';
            }

            return (
              <div
                key={idx}
                className={`relative z-30 flex h-[40px] cursor-pointer items-center justify-center transition-all duration-200 ease-in-out ${textSize} ${fontWeight} ${textColor}`}
                onClick={() => setSelected(item)}
              >
                {item.toString().padStart(2, '0')}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className='mb-4'>
      <p className='mb-3 font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>Arrival time</p>
      <div className='mx-auto w-full max-w-[227px] rounded-xl font-dm-sans'>
        <div className='flex items-center justify-center'>
          {renderList(hours, selectedHour, setSelectedHour, 'left')}
          {renderList(minutes, selectedMinute, setSelectedMinute)}
          {renderList(periods, selectedPeriod, setSelectedPeriod, 'right')}
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
