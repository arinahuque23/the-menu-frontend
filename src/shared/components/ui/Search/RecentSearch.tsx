import TimerIcon from '@/icons/TimerIcon';
import Link from 'next/link';

const RecentSearch = () => {
  return (
    <div className='container mb-6'>
      <div className='mb-3 flex items-end justify-between gap-4'>
        <p className='font-semi-bold-disp text-[22px] text-clr-black-01'>Recent search</p>
        <p className='font-roman-disp text-[15px] text-clr-gray-99'>3 results</p>
      </div>
      <div className='space-y-2'>
        {['Open', 'Closed', 'Open'].map((item, index) => (
          <Link href={`/restaurant/${index + 1} `} key={index} className='shadow-search flex items-center gap-2 rounded-xl p-2'>
            <div className='flex size-[56px] flex-shrink-0 items-center justify-center rounded-lg bg-[rgba(182,2,11,0.04)]'>
              <TimerIcon />
            </div>
            <div>
              <div className='mb-0.5 flex items-center gap-3'>
                <span
                  className={`${item === 'Open' ? 'text-clr-green-2f' : 'text-clr-red-0b'} font-roman-disp text-sm capitalize leading-[16px]`}
                >
                  {item}
                </span>
                <span className='border-l border-clr-white-e6 pl-3 font-light-disp text-sm capitalize leading-[16px] text-clr-brown-34'>
                  Traditional
                </span>

                <span className='border-l border-clr-white-e6 pl-3 font-light-disp text-sm  leading-[16px] text-clr-brown-34'>
                  134 bookings
                </span>
              </div>
              <h3 className='font-medium-disp text-lg leading-[26px]'>Han Tale Barbecue</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentSearch;
