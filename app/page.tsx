'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CourseListArea from './_components/CourseListArea';
import FilterArea from './_components/FilterArea';
import PaginationArea from './_components/PaginationArea';
import SearchArea from './_components/SearchArea';
import { useCourse } from './_hooks/course-context';
import { fetchData } from './_utils/fetchData';

export default function Home() {
  const { data, filter_conditions, setTitle, setData, setChip } = useCourse();
  const searchParams = useSearchParams();
  const [params] = useState(new URLSearchParams(searchParams?.toString()));
  const [curPage, setCurPage] = useState(Number(params.get('offset')) + 1 || 1);
  const router = useRouter();
  useEffect(() => {
    if (!params.has('offset')) {
      router.push(`?offset=0`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTitle(params.get('title') || '');
    for (const key of params.keys()) {
      if (key !== 'title') setChip(params.getAll(key));
    }
    fetchData({ offset: 0, count: 20, filter_conditions, setData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <>
      <SearchArea></SearchArea>
      <FilterArea setCurPage={setCurPage}></FilterArea>
      <CourseListArea data={data}></CourseListArea>
      <PaginationArea
        totalPage={Math.floor(data.courseCount / 20) + 1}
        curPage={curPage}
        setCurPage={setCurPage}
      ></PaginationArea>
    </>
  );
}
