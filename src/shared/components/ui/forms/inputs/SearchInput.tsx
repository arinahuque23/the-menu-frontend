'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useSearch } from '@/context/SearchContext';

import FilterModal from '@/shared/components/ui/modal/FilterModal';

import FilterIcon from '@/icons/FilterIcon';
import SearchIcon from '@/icons/SearchIcon';

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [showFilter, setShowFilter] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  //   if (searchQuery) {
  //     router.push('/search-result');
  //   }
  // }, [searchQuery]);

  useEffect(() => {
    if (showFilter) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showFilter]);

  return (
    <form className='py-2'>
      <div className='flex items-center justify-between gap-1 rounded-xl border border-transparent bg-clr-white-fa py-1.5 pl-2 pr-1 focus-within:border-clr-red-0b/10'>
        <div className='flex w-full items-center gap-1'>
          <label htmlFor='default-search'><SearchIcon /></label>
          <input
            id='default-search'
            type='search'
            value={searchQuery}
            onFocus={() => router.push('/search-result')}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-transparent font-book-disp text-base outline-none placeholder:text-clr-black-01/40'
            placeholder='Search here'
          />
        </div>
        <button
          type='button'
          onClick={() => setShowFilter(true)}

        >
          <FilterIcon />
        </button>
        {showFilter && <FilterModal setShowFilter={setShowFilter} />}
      </div>
    </form>
  );
};

export default SearchInput;
