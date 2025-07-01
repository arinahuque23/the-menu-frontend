import StarIcon from '@/icons/StarIcon';

type TRatingStarProps = {
  rating: number;
  filledColor?: string;
  emptyColor?: string;
};

const RatingStar: React.FC<TRatingStarProps> = ({
  rating,
  filledColor = '#FFA600',
  emptyColor = '#E0E0E0'
}) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} fill={star <= rating ? filledColor : emptyColor} />
      ))}
    </>
  );
};

export default RatingStar;
