import { restaurantsData } from '@/data/restaurant.data';
import Header from '@/modules/home/components/Header';
import { Card } from '@/shared/components/ui';

const Favourites = () => {
  return (
    <div className='container mx-auto flex flex-col pb-4'>
      <Header showBackButton />
      <div className='mt-2'>
        <div className='mb-3 flex items-end justify-between gap-4'>
          {' '}
          <p className='font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>My favorites</p>
          <p className='font-roman-disp text-sm leading-[22px] text-clr-gray-99'>8 results</p>
        </div>
        {restaurantsData.map((booking, index) => (
          <div key={index}>
            <Card
              image={booking.image}
              status={booking.status}
              type={booking.type}
              title={booking.title}
              rating={booking.rating}
              avgPrice={booking.avgPrice}
              bookingsCount={booking.bookingsCount}
              label={booking.label}
              favourite
              cardRootClassName='mb-3'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
