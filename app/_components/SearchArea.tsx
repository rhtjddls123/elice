'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { SearchInput } from '../_styles/styledComponentStyles';
import { debounce } from '../_utils/debounce';

const SearchArea = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams?.toString());

  // eslint-disable-next-line
  const debouncedSearch = useCallback(
    debounce((searchType: string, value: string) => {
      console.log(value);
      if (value) {
        params.set(searchType, value);
        router.push(`?${params.toString()}`);
      } else {
        params.delete(searchType);
        router.push(`?${params.toString()}`);
      }
    }, 300),
    []
  );

  useEffect(() => {
    if (params.has('title') && searchRef.current)
      searchRef.current.value = '' + params.get('title');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        // value={search}
        ref={searchRef}
        onChange={() => {
          const value = searchRef.current?.value;
          debouncedSearch('title', '' + value);
        }}
      ></SearchInput>
    </div>
  );
};

export default SearchArea;
