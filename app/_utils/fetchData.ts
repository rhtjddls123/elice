import { Dispatch, SetStateAction } from 'react';
import { filterConditionsType, searchCourseType } from '../_types/type';

type Props = {
  offset: number;
  count: number;
  filter_conditions: filterConditionsType;
  setData: Dispatch<SetStateAction<searchCourseType[] | undefined>>;
};

export const fetchData = async ({
  offset,
  count,
  filter_conditions,
  setData,
}: Props) =>
  await fetch(
    `/api/elice/course/?offset=${offset}&count=${count}&filter=${JSON.stringify(filter_conditions)}`,
    {
      method: 'GET',
    }
  )
    .then(async (res) => {
      if (res.status === 200) return res.json();
      throw new Error(await res.json());
    })
    .then((data: searchCourseType[]) => {
      setData(data);
    })
    .catch((e) => {
      console.log(e);
    });
