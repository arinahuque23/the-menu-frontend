import Header from '@/modules/home/components/Header';
import ReviewCount from '@/modules/reviews/components/ReviewCount';
import ReviewsList from '@/modules/reviews/components/ReviewsList';


const Reviews = () => {
  return (
    <>
      <div className='container'>
        <Header showBackButton />
      </div>
      <div className='container'>
        <ReviewCount count={4.9} />
      </div>
      {/* <div className='container pr-0'>
        <ReviewFilter />
      </div> */}
      <div className='container'>
        <ReviewsList />
      </div>
    </>
  );
};

export default Reviews;
