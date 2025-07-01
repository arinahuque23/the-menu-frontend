
interface IDiscountCardProps {
  percentage: number
}
const DiscountCard: React.FC<IDiscountCardProps> = ({ percentage }) => {
  return (
    <div className="p-4 rounded-lg boxshadow">
      <div className="border-b border-clr-white-e6 border-dotted flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-clr-black-01 leading-5 font-bold-disp mb-4">{percentage}% OFF</h1>
          <p className="text-xs text-clr-brown-34 mb-3">Lorem ipsum dolor sit amet <br /> consectetur. Ultrices eget massa.</p>
        </div>

        <button className='p-3 bg-clr-red-0b text-white hover:bg-red-800 font-medium rounded-2xl'>Claim Now</button>
      </div>
      <p className="text-[10px] opacity-80 text-center text-clr-gray-99 pt-3">Terms and condition applies</p>
    </div>
  );
};
export default DiscountCard;