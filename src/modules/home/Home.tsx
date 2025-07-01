import { FeaturedLeaderboard } from '@/modules/home/components/FeaturedLeaderboard';
import FeaturedSection from '@/modules/home/components/FeaturedSection';
import Header from '@/modules/home/components/Header';
import HomeBanner from '@/modules/home/components/HomeBanner';
import MostBooked from '@/modules/home/components/MostBooked';
import RestaurantFinde from '@/modules/home/components/RestaurantFinde';
import SpecialOffer from '@/modules/home/components/SpecialOffer';
import SearchInput from '@/shared/components/ui/forms/inputs/SearchInput';

const Home = () => {
  return (
    <div>
      <div className='container'>
        <Header />
        <SearchInput />
        <HomeBanner />
      </div>
      <FeaturedSection title='We recommend' name='See all' link='/map' />
      <div className='container'>
        <FeaturedLeaderboard month='October' className='mb-6' />
      </div>
      <FeaturedSection title='Recently reviewed' name='See all' link='/map' />
      <div className='container'>
        <SpecialOffer label='See all offers' SpecialOfferRootClassName='mb-6 ' />
      </div>
      <div >
        <MostBooked />
      </div>
      <div className='container'>
        <RestaurantFinde />
      </div>
    </div>
  );
};

export default Home;
