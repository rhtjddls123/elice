'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { filterConditionsType, searchCourseType } from '../_types/type';

type CoureContextProps = {
  filter_conditions: filterConditionsType;
  setTitle: (value: string) => void;
  setChip: (value: string[]) => void;
  setData: Dispatch<SetStateAction<searchCourseType>>;
  data: searchCourseType;
};

const CourseContext = createContext<CoureContextProps>({
  filter_conditions: {
    $and: [{}, { $or: [] }],
  },
  setTitle: (value: string) => {},
  setChip: (value: string[]) => {},
  setData: () => {},
  data: {
    courseCount: 0,
    course: [
      {
        id: 0,
        title: '',
        isFree: false,
        price: '',
        description: '',
        logoFile: '',
        enrollType: 0,
      },
    ],
  },
});

const CourseContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<searchCourseType>({
    courseCount: 0,
    course: [
      {
        id: 0,
        title: '',
        isFree: false,
        price: '',
        description: '',
        logoFile: '',
        enrollType: 0,
      },
    ],
  });
  // const filter_conditions: filterConditionsType = {
  //   $and: [{}, { $or: [] }],
  // };
  const [filter_conditions] = useState<filterConditionsType>({
    $and: [{}, { $or: [] }],
  });

  const setTitle = (value: string) => {
    console.log('타이틀밸류융유', value);
    if (value) filter_conditions.$and[0].title = `%${value}%`;
    else {
      filter_conditions.$and[0] = {};
      console.log(filter_conditions);
    }
  };

  const setChip = (value: string[]) => {
    console.log('밸류는', value);
    for (const i of value) {
      const isFree = i === '무료' ? true : i === '유료' ? false : undefined;
      const enrollType = i === '구독' ? 4 : 0;
      console.log(enrollType, isFree);
      const filter = {
        enroll_type: enrollType,
        is_free: isFree,
      };
      console.log(
        '확인뇽',
        !filter_conditions.$and[1].$or.some(
          (item) => item.is_free === filter.is_free
        )
      );
      if (
        !filter_conditions.$and[1].$or.some(
          (item) =>
            item.is_free === filter.is_free ||
            (filter.is_free === undefined &&
              item.enroll_type === filter.enroll_type)
        )
      ) {
        console.log('현재필터', filter_conditions.$and[1].$or);
        filter_conditions.$and[1].$or.push(filter);
      }
    }
    if (value.length === 0) {
      filter_conditions.$and[1].$or = [];
    }
    console.log('아니이게', filter_conditions.$and[1].$or);
  };

  return (
    <CourseContext.Provider
      value={{ filter_conditions, setTitle, data, setData, setChip }}
    >
      {children}
    </CourseContext.Provider>
  );
};

const useCourse = () => useContext(CourseContext);

export { CourseContextProvider, useCourse };
