'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useCourse } from '../_hooks/course-context';
import {
  FilterChipArea,
  FilterTitleArea,
} from '../_styles/styledComponentStyles';
import { fetchData } from '../_utils/fetchData';
import Chip from './Chip';

const FilterArea = () => {
  const { data, filter_conditions, setTitle, setData } = useCourse();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());
  const filterTitle = ['가격'];
  const filterChip = [['무료', '유료', '구독']];
  return (
    <div className=' flex-col'>
      {filterTitle.map((title, i) => (
        <div
          key={i}
          className=' flex border-b border-b-[#e1e2e4] border-solid bg-white'
        >
          <FilterTitleArea>
            <div>{title}</div>
          </FilterTitleArea>
          <FilterChipArea>
            {filterChip[i].map((a) => (
              <Chip key={a} filterTitle={title} filterChip={a} />
            ))}
          </FilterChipArea>
        </div>
      ))}
    </div>
  );
};

export default FilterArea;
