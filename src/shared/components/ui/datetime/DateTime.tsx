import CalenderIcon from '@/icons/CalenderIcon';
import ClockIcon from '@/icons/ClockIcon';

interface IDateTimeProps {
  change?: string;
  time?: string;
  date?: string;
  onChangeClick?: (value: boolean) => void;
}

const DateTime: React.FC<IDateTimeProps> = ({ change, date, time, onChangeClick }) => {
  return (
    <div
      className={`mt-2 flex h-[44px] w-full items-center rounded-lg bg-clr-white-fa py-1.5 pl-2 pr-1.5 ${change ? 'justify-between' : 'justify-center'}`}
    >
      {time && (
        <div className='flex gap-3 font-book-disp text-sm text-clr-black-01'>
          <h3 className='flex items-center gap-1 text-sm'>
            <ClockIcon /> {time}
          </h3>
          <h3 className='flex items-center gap-1 text-sm'>
            <CalenderIcon /> {date}
          </h3>
        </div>
      )}

      {change && (
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onChangeClick && onChangeClick(true)
            }}
            className='rounded-lg border border-clr-red-0b px-3 py-2 font-roman-disp text-xs text-clr-red-0b'
          >
            {change}
          </button>
        </div>
      )}
    </div>
  );
};

export default DateTime;
