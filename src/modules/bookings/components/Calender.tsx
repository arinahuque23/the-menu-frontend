'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface ICustomCalendarProps {
  title?: string;
}

const CustomCalendar: React.FC<ICustomCalendarProps> = ({ title }) => {
  const [value, setValue] = useState<Date | [Date, Date]>(new Date());
  const CustomPrevIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
      <rect x='28' width='28' height='28' rx='4' transform='rotate(90 28 0)' fill='#F5F5F5' />
      <path
        d='M16.0878 19.5935L10.7472 14.2528C10.6975 14.2032 10.6581 14.1443 10.6312 14.0795C10.6044 14.0147 10.5905 13.9452 10.5905 13.875C10.5905 13.8048 10.6044 13.7353 10.6312 13.6705C10.6581 13.6057 10.6975 13.5467 10.7472 13.4971L16.0878 8.15651C16.188 8.0563 16.3239 8 16.4656 8C16.6074 8 16.7433 8.0563 16.8435 8.15651C16.9437 8.25672 17 8.39264 17 8.53436C17 8.67608 16.9437 8.812 16.8435 8.91221L11.88 13.875L16.8435 18.8378C16.8931 18.8874 16.9325 18.9463 16.9593 19.0111C16.9862 19.076 17 19.1455 17 19.2156C17 19.2858 16.9862 19.3553 16.9593 19.4201C16.9325 19.485 16.8931 19.5439 16.8435 19.5935C16.7939 19.6431 16.735 19.6825 16.6701 19.7093C16.6053 19.7362 16.5358 19.75 16.4656 19.75C16.3955 19.75 16.326 19.7362 16.2611 19.7093C16.1963 19.6825 16.1374 19.6431 16.0878 19.5935Z'
        fill='#B6020B'
      />
    </svg>
  );
  const CustomNextIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
      <rect y='28' width='28' height='28' rx='4' transform='rotate(-90 0 28)' fill='#F5F5F5' />
      <path
        d='M11.9122 8.40651L17.2528 13.7471C17.3025 13.7967 17.3419 13.8557 17.3688 13.9205C17.3956 13.9853 17.4095 14.0548 17.4095 14.125C17.4095 14.1952 17.3956 14.2647 17.3688 14.3295C17.3419 14.3943 17.3025 14.4533 17.2528 14.5029L11.9122 19.8435C11.812 19.9437 11.6761 20 11.5344 20C11.3926 20 11.2567 19.9437 11.1565 19.8435C11.0563 19.7433 11 19.6074 11 19.4656C11 19.3239 11.0563 19.188 11.1565 19.0878L16.12 14.125L11.1565 9.16221C11.1069 9.11259 11.0675 9.05368 11.0407 8.98885C11.0138 8.92402 11 8.85453 11 8.78436C11 8.71419 11.0138 8.6447 11.0407 8.57987C11.0675 8.51504 11.1069 8.45613 11.1565 8.40651C11.2061 8.35689 11.265 8.31753 11.3299 8.29068C11.3947 8.26382 11.4642 8.25 11.5344 8.25C11.6045 8.25 11.674 8.26382 11.7389 8.29068C11.8037 8.31753 11.8626 8.35689 11.9122 8.40651Z'
        fill='#B6020B'
      />
    </svg>
  );

  return (
    <div className='mb-4'>
      <p className='mb-3 font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>{title}</p>
      <Calendar
        onChange={(value) => setValue(Array.isArray(value) ? (value as [Date, Date]) : (value as Date))}
        value={value}
        prevLabel={CustomPrevIcon}
        nextLabel={CustomNextIcon}
        minDetail='month'
        maxDetail='month'
        minDate={new Date()}
      />
    </div>
  );
};

export default CustomCalendar;
