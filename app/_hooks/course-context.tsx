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
  setData: Dispatch<SetStateAction<searchCourseType[] | undefined>>;
  data: searchCourseType[] | undefined;
};

const CourseContext = createContext<CoureContextProps>({
  filter_conditions: {
    $and: [{}, { $or: [{}] }],
  },
  setTitle: (value: string) => {},
  setData: () => {},
  data: undefined,
});

const CourseContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<searchCourseType[]>();
  const filter_conditions: filterConditionsType = {
    $and: [{}, { $or: [{}] }],
  };

  const setTitle = (value: string) => {
    filter_conditions.$and[0].title = `%${value}%`;
  };

  return (
    <CourseContext.Provider
      value={{ filter_conditions, setTitle, data, setData }}
    >
      {children}
    </CourseContext.Provider>
  );
};

const useCourse = () => useContext(CourseContext);

export { CourseContextProvider, useCourse };
