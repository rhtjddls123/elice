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
  setData: Dispatch<SetStateAction<searchCourseType[] | undefined>>;
  data: searchCourseType[] | undefined;
};

const CourseContext = createContext<CoureContextProps>({
  filter_conditions: {
    $and: [{}, { $or: [{}] }],
  },
  setTitle: (value: string) => {},
  setChip: (value: string[]) => {},
  setData: () => {},
  data: undefined,
});

const CourseContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<searchCourseType[]>();
  const filter_conditions: filterConditionsType = {
    $and: [{}, { $or: [] }],
  };

  const setTitle = (value: string) => {
    filter_conditions.$and[0].title = `%${value}%`;
  };

  const setChip = (value: string[]) => {
    console.log(value);
    for (const i of value) {
      const filter = { enroll_type: 0, is_free: i === '무료' ? true : false };
      if (
        !filter_conditions.$and[1].$or.some(
          (item) => item.is_free === filter.is_free
        )
      )
        filter_conditions.$and[1].$or.push(filter);
    }
    console.log(filter_conditions.$and[1]);
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
