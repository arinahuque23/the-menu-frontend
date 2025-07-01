'use client';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useRef, useState } from 'react';

interface IDoubleRangeSliderProps {
  value?: [number, number];
  onChange?: (value: [number, number]) => void;
}

const DoubleRangeSlider: React.FC<IDoubleRangeSliderProps> = ({
  value = [0, 500],
  onChange
}) => {
  const [values, setValues] = useState<[number, number]>(value);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setValues(value);
  }, [value]);

  const handleChange = (val: number | number[]) => {
    if (Array.isArray(val)) {
      const newValues: [number, number] = [val[0], val[1]];
      setValues(newValues);
      onChange?.(newValues);
    }
  };

  const isOverlapping = Math.abs(values[0] - values[1]) < 160;

  const getClampedLeft = (value: number) => {
    const percent = (value / 1000) * 100;
    if (percent <= 2) return '2%';
    if (percent >= 98) return '98%';
    return `${percent}%`;
  };

  const getTransform = (value: number) => {
    const percent = (value / 1000) * 100;
    if (percent <= 2) return 'none';
    if (percent >= 98) return 'translateX(-100%)';
    return 'translateX(-50%)';
  };

  const getMiddleLeft = () => {
    const middle = ((values[0] + values[1]) / 2 / 1000) * 100;
    const leftOverlap = Math.min(Math.max(middle, 2), 98);
    if (isOverlapping && leftOverlap < 10) return '10%';
    if (isOverlapping && leftOverlap > 90) return '87%';
    return `${leftOverlap}%`;
  };

  return (
    <div className='mb-2 rounded-2xl border border-clr-white-e6 transition-all'>
      <div className='border-b border-clr-white-f5 p-3'>
        <p className='font-medium-disp text-base text-clr-black-01'>Average price</p>
      </div>

      <div className='relative p-3 pb-8' ref={sliderRef}>
        {!isOverlapping ? (
          <>
            <div
              className='absolute bottom-4 font-book-disp text-xs text-clr-brown-67'
              style={{
                left: getClampedLeft(values[0]),
                transform: getTransform(values[0])
              }}
            >
              ${values[0]}
            </div>
            <div
              className='absolute bottom-4 font-book-disp text-xs text-clr-brown-67'
              style={{
                left: getClampedLeft(values[1]),
                transform: getTransform(values[1])
              }}
            >
              ${values[1]}
            </div>
          </>
        ) : (
          <div
            className='absolute bottom-4 whitespace-nowrap font-book-disp text-xs text-clr-brown-67'
            style={{
              left: getMiddleLeft(),
              transform: 'translateX(-50%)'
            }}
          >
            ${values[0]} – ${values[1]}
          </div>
        )}

        <Slider
          range
          min={0}
          max={1000}
          step={5}
          value={values}
          onChange={handleChange}
          allowCross={false}
        />
      </div>
    </div>
  );
};

export default DoubleRangeSlider;