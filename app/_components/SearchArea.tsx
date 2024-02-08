'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { SearchInput } from '../_styles/styledComponentStyles';
import { debounce } from '../_utils/debounce';

const SearchArea = () => {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams?.toString());

  // eslint-disable-next-line
  const debouncedSearch = useCallback(
    debounce((search, value) => {
      params.set(search, value);
      router.push(`?${params.toString()}`);
    }, 300),
    []
  );

  return (
    <div className=' w-full border border-[#c9cacc] rounded bg-white my-3 flex'>
      <Image
        src={'/serchIcon.svg'}
        width={16}
        height={16}
        alt='serchIcon'
        className=' mx-4'
      ></Image>
      <SearchInput
        placeholder='배우고싶은 언어, 기술을 검색해 보세요'
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
          debouncedSearch('title', value);
        }}
      ></SearchInput>
    </div>
  );
};

export default SearchArea;
