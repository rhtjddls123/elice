'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useCourse } from '../_hooks/course-context';
import { searchCourseType } from '../_types/type';
import { fetchData } from '../_utils/fetchData';
import CourseArea from './CourseArea';

type Props = {
  data: searchCourseType;
};

const CourseListArea = ({ data }: Props) => {
  return (
    <div className=' flex flex-row flex-wrap gap-8 justify-center pt-4'>
      {data?.course.map((a) => (
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
