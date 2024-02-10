'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useCourse } from '../_hooks/course-context';
import {
  PaginationBox,
  PaginationButtonStyle,
} from '../_styles/styledComponentStyles';
import { fetchData } from '../_utils/fetchData';
import PaginationButton from './PaginationButton';

type Props = {
  totalPage: number;
  curPage: number;
  setCurPage: Dispatch<SetStateAction<number>>;
};
const PaginationArea = ({ totalPage, curPage, setCurPage }: Props) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());
  const router = useRouter();
  const { filter_conditions, setData } = useCourse();
  // const [curPage, setCurPage] = useState(Number(params.get('offset')) + 1 || 1);
  const [arr, setArr] = useState<number[]>([]);
  useEffect(() => {
    if (totalPage <= 9)
      setArr(Array.from({ length: totalPage }, (_, i) => i + 1));
    else {
      if (curPage < 5) setArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      else {
        const startNum = Math.max(1, curPage - 4);
        const endNum = Math.min(curPage + 4, totalPage);
        if (endNum === totalPage) {
          setArr(
            Array.from({ length: 9 }, (_, i) => {
              return endNum - 8 + i;
            })
          );
        } else {
          setArr(
            Array.from({ length: 9 }, (_, i) => {
              return i + startNum;
            })
          );
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPage, curPage]);
  return (
    <PaginationBox className=' flex'>
      <PaginationButtonStyle
        $backgroundColor={Number(params.get('offset')) === 0 ? '#ccc' : '#222'}
        disabled={Number(params.get('offset')) === 0}
        onClick={() => {
          params.set('offset', Number(params.get('offset')) - 20 + '');
          router.push(`?${params.toString()}`);
          router.refresh();
          fetchData({
            offset: Number(params.get('offset')),
            count: 20,
            filter_conditions,
            setData,
          });
        }}
      >
        {'<'}
      </PaginationButtonStyle>
      {arr.map((a) => (
        <PaginationButton
          key={a}
          pageNumber={a + ''}
          setCurPage={setCurPage}
        ></PaginationButton>
      ))}
      <PaginationButtonStyle
        $backgroundColor={
          Math.floor(Number(params.get('offset')) / 20) + 1 >= totalPage
            ? '#ccc'
            : '#222'
        }
        disabled={
          Math.floor(Number(params.get('offset')) / 20) + 1 >= totalPage
        }
        onClick={() => {
          params.set('offset', Number(params.get('offset')) + 20 + '');
          router.push(`?${params.toString()}`);
          router.refresh();
          fetchData({
            offset: Number(params.get('offset')),
            count: 20,
            filter_conditions,
            setData,
          });
        }}
      >
        {'>'}
      </PaginationButtonStyle>
    </PaginationBox>
  );
};

export default PaginationArea;
