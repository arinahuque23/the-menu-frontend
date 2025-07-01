import { restaurantsData } from '@/data/restaurant.data';

import { Card } from '@/shared/components/ui';
import BackButton from '@/shared/components/ui/backbutton/BackButton';
import SearchInput from '@/shared/components/ui/forms/inputs/SearchInput';
import Title from '@/shared/components/ui/title/Title';

const Restaurant = () => {
  return (
    <div className='container mx-auto flex flex-col gap-4 py-4'>
      <BackButton />
      <SearchInput />
      <Title title='Restaurants for you' name='Show more' link='show more' />
      <div className='flex flex-col gap-2'>
        {restaurantsData.map((item, index) => (
          <Card
            type={item.type}
            key={`restaurant_${index}`}
            image={item.image}
            status={item.status}
            title={item.title}
            avgPrice={item.avgPrice}
            rating={item.rating}
            bookingsCount={item.bookingsCount}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
