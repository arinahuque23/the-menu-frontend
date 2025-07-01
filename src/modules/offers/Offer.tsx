import Header from '@/modules/home/components/Header';
import DiscountCard from '@/modules/offers/components/DiscountCard';
import SpecialOffer from '@/modules/offers/components/SpecialOffer';

const Offer = () => {
  return (
    <div className='container flex flex-col gap-4 pb-4'>
      <Header showBackButton />
      <SpecialOffer rootSectionClassName='' />
      <DiscountCard percentage={40} />
      <DiscountCard percentage={60} />
      <DiscountCard percentage={20} />
      <DiscountCard percentage={40} />
      <DiscountCard percentage={60} />
      <DiscountCard percentage={20} />
    </div>
  );
};

export default Offer;
