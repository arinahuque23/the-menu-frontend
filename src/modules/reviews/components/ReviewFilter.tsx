const ReviewFilter = () => {
  return (
    <ul className='scrollbar-hide mb-5 flex w-full items-center gap-1 overflow-y-scroll'>
      <li>
        <button className='text-nowrap rounded-full bg-clr-red-0b px-3 py-1 font-book-disp text-white'>
          All
        </button>
      </li>
      <li>
        <button className='text-nowrap rounded-full bg-clr-white-fa px-3 py-1 font-book-disp text-clr-brown-4d'>
          Most recent
        </button>
      </li>
      <li>
        <button className='text-nowrap rounded-full bg-clr-white-fa px-3 py-1 font-book-disp text-clr-brown-4d'>
          Highest rated
        </button>
      </li>
      <li>
        <button className='text-nowrap rounded-full bg-clr-white-fa px-3 py-1 font-book-disp text-clr-brown-4d'>
          Lowest rated
        </button>
      </li>
    </ul>
  );
};

export default ReviewFilter;
