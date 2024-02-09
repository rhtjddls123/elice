'use client';

import CourseListArea from './_components/CourseListArea';
import FilterArea from './_components/FilterArea';
import SearchArea from './_components/SearchArea';

export default function Home() {
  return (
    <>
      <SearchArea></SearchArea>
      <FilterArea></FilterArea>
      <CourseListArea></CourseListArea>
    </>
  );
}
