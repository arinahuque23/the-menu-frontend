import SealCheck from '@/icons/SealCheck';

import Title from '@/shared/components/ui/title/Title';

const RestaurantTitleAvailable = () => {
  return (
    <div >
      <div className='px-5 mb-4 flex items-center gap-2'>
        <Title
          title='Tangiers Lounge Buharestskaya'
          titleClassName='text-clr-black-01 font-semi-bold-disp  text-nowrap'
        />
        <SealCheck fill={'#B6020B'} />
      </div>
      <ul className='pr-5 pl-5 scrollbar-hide flex w-full items-center gap-4 overflow-y-scroll'>
        <li className='text-nowrap border-r pr-4 font-roman-disp text-sm text-clr-green-2f last:border-r-0'>
          Open until 7:00 PM
        </li>
        <li className='text-nowrap border-r pr-4 font-light-disp text-sm text-clr-brown-34 last:border-r-0'>
          Traditional
        </li>
        <li className='text-nowrap border-r pr-4 font-light-disp text-sm text-clr-brown-34 last:border-r-0'>
          $14 average price
        </li>
        <li className='text-nowrap border-r pr-4 font-light-disp text-sm text-clr-brown-34 last:border-r-0'>
          134 bookings
        </li>
      </ul>
    </div>
  );
};

export default RestaurantTitleAvailable;
