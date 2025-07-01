interface IWorkingTime {
  setShowReportModal: (show: boolean) => void
  setShowDetails: (show: boolean) => void
}
const WorkingTime: React.FC<IWorkingTime> = ({ setShowReportModal, setShowDetails }) => {
  return (
    <div className='mb-3'>
      <p className='mb-3 font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>Working hours</p>
      <div className='rounded-2xl border border-clr-white-f5 p-3'>
        <div className='mb-2 flex items-center justify-between gap-4 text-sm text-clr-brown-34'>
          <p className='font-light-disp'>Saturday - Thursday</p>
          <p className='font-book-disp'>9:00 AM - 10:00 PM</p>
        </div>
        <div className='mb-3 flex items-center justify-between gap-4 text-sm text-clr-brown-34'>
          <p className='font-light-disp'>Friday</p>
          <p className='font-book-disp'>4:00 PM - 10:00 PM</p>
        </div>
        <button onClick={() => {
          setShowReportModal(true)
          setShowDetails(false)
        }} className='border-clr w-full border-t pt-3 text-center font-roman-disp text-sm text-clr-red-0b'>
          Report an inaccuracy
        </button>
      </div>
    </div>
  );
};

export default WorkingTime;
