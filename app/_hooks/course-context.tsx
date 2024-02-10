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
    if (value) filter_conditions.$and[0].title = `%${value}%`;
    else {
      filter_conditions.$and[0] = {};
    }
  };

  const setChip = (value: string[]) => {
    filter_conditions.$and[1].$or = [];
    for (const i of value) {
      const isFree = i === '무료' ? true : i === '유료' ? false : undefined;
      const enrollType = i === '구독' ? 4 : 0;
      const filter = {
        enroll_type: enrollType,
        is_free: isFree,
      };
      filter_conditions.$and[1].$or.push(filter);
    }
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
