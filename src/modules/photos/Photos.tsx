import Header from '@/modules/home/components/Header';
import PhotosList from '@/modules/photos/Components/PhotosList';

const Photos = () => {
  return (
    <>
      <div className='container mb-1'>
        <Header showBackButton />
      </div>
      <div className='container'>
        <PhotosList />
      </div>
    </>
  );
};

export default Photos;
