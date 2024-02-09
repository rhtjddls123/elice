'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useCourse } from '../_hooks/course-context';
import { fetchData } from '../_utils/fetchData';
import CourseArea from './CourseArea';

const CourseListArea = () => {
  const { data, filter_conditions, setTitle, setData, setChip } = useCourse();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());

  useEffect(() => {
    setTitle(params.get('title') || '');
    for (const key of params.keys()) {
      if (key !== 'title') setChip(params.getAll(key));
    }
    fetchData({ offset: 0, count: 20, filter_conditions, setData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=' flex flex-row flex-wrap gap-8 justify-center pt-4'>
      {data?.map((a) => (
        <CourseArea
          key={a.id}
          title={a.title}
          description={a.description}
          logoFile={a.logoFile || ''}
          enrollType={a.enrollType}
          isFree={a.isFree}
        ></CourseArea>
      ))}
    </div>
  );
};

export default CourseListArea;
