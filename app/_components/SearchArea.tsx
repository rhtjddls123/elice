'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { useCourse } from '../_hooks/course-context';
import { SearchInput } from '../_styles/styledComponentStyles';
import { debounce } from '../_utils/debounce';
import { fetchData } from '../_utils/fetchData';

const SearchArea = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams?.toString());
  const { filter_conditions, setTitle, setData, data } = useCourse();

  // eslint-disable-next-line
  const debouncedSearch = useCallback(
    debounce(async (searchType: string, value: string) => {
      if (value) {
        params.set(searchType, value);
        router.push(`?${params.toString()}`);
      } else {
        params.delete(searchType);
        router.push(`?${params.toString()}`);
      }
      await setTitle(params.get(searchType) || '');
      await fetchData({ offset: 0, count: 5, filter_conditions, setData });
      console.log(data);
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
