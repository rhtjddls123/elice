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
  const { filter_conditions, setTitle, setData, setChip } = useCourse();

  // eslint-disable-next-line
  const debouncedSearch = useCallback(
    debounce(
      (
        searchType: string,
        value: string,
        query: IterableIterator<[string, string]>
      ) => {
        params.delete('가격');
        if (value) {
          params.set(searchType, value);
        } else {
          params.delete(searchType);
          params.set('offset', '0');
        }
        for (const [key, v] of query) {
          if (key === 'title') params.set('title', value);
          else if (key === 'offset') params.set('offset', '0');
          else {
            params.append(key, v);
          }
        }
        router.push(`?${params.toString()}`);
        setChip(params.getAll('가격'));
        setTitle(params.get(searchType) || '');
        fetchData({ offset: 0, count: 20, filter_conditions, setData });
      },
      300
    ),
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
          debouncedSearch('title', '' + value, params.entries());
        }}
      ></SearchInput>
    </div>
  );
};

export default SearchArea;
