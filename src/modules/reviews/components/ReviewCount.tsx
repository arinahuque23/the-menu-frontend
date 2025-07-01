import StarIcon from '@/icons/StarIcon';

type TReviewCountProps = {
  count: number | string;
};

const ReviewCount: React.FC<TReviewCountProps> = ({ count }) => {
  return (
    <div className='mb-3 flex w-full items-center justify-center rounded-xl border border-clr-white-f5 px-3 py-2'>
      <div className='flex items-center gap-6'>
        <div className='flex items-center gap-1'>
          <StarIcon fill='#FFA600' />
          <p className='font-semi-bold-disp text-clr-black-01'>{count}</p>
        </div>
        <p className='font-light-disp text-sm'>Based on 1245 reviews</p>
      </div>
    </div>
  );
};

export default ReviewCount;
