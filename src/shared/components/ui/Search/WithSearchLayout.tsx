'use client';

import { useSearch } from '@/context/SearchContext';
import SearchResult from '@/modules/SearchModules/SearchResult';

const WithSearchLayout = ({ children }: { children: React.ReactNode }) => {
  const { searchQuery } = useSearch();

  return <div>{searchQuery ? <SearchResult /> : children}</div>;
};

export default WithSearchLayout;
