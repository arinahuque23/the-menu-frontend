import Title from '@/shared/components/ui/title/Title';

type TRestaurantWorkingHoursProps = {
  onReportClick?: () => void;
};

const RestaurantWorkingHours: React.FC<TRestaurantWorkingHoursProps> = ({ onReportClick }) => {
  return (
    <div className='px-5'>
      <Title
        titleClassName='text-clr-black-01 font-semi-bold-disp text-[22px]'
        titleRootClassName='pb-3'
        title='Working hours'
      />
      <ul className='rounded-2xl border border-clr-white-f5 p-3'>
        <div className='mb-3 border-b border-b-clr-white-f5 pb-1'>
          <table className='w-full'>
            <tbody>
              <tr>
                <td className='pb-2 text-left font-light-disp text-sm text-clr-brown-34'>
                  Saturday - Thursday
                </td>
                <td className='pb-2 text-right font-book-disp text-sm text-clr-brown-34'>
                  9:00 AM - 10:00 PM
                </td>
              </tr>
              <tr>
                <td className='pb-2 text-left font-light-disp text-sm text-clr-brown-34'>Friday</td>
                <td className='pb-2 text-right font-book-disp text-sm text-clr-brown-34'>
                  4:00 PM - 10:00 PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          onClick={onReportClick}
          className='w-full text-center font-roman-disp text-sm text-clr-red-0b'
        >
          Report an inaccuracy
        </button>
      </ul>
    </div>
  );
};

export default RestaurantWorkingHours;
