'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useCourse } from '../_hooks/course-context';
import { PaginationButtonStyle } from '../_styles/styledComponentStyles';
import { fetchData } from '../_utils/fetchData';

type Props = {
  pageNumber: string;
  setCurPage: Dispatch<SetStateAction<number>>;
};

const PaginationButton = ({ pageNumber, setCurPage }: Props) => {
  const [fontColor, setFontColor] = useState('#999');
  const [backgroundColor, setBackgroundColor] = useState(`#0000`);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams?.toString());
  const { filter_conditions, setData, setTitle, setChip } = useCourse();

  useEffect(() => {
    if (params.get('offset') !== 20 * (Number(pageNumber) - 1) + '') {
      setFontColor('#999');
      setBackgroundColor(`#0000`);
    } else {
      setFontColor('#ffffff');
      setBackgroundColor(`#524fa1`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <PaginationButtonStyle
      onClick={() => {
        setFontColor('#ffffff');
        setBackgroundColor(`#524fa1`);
        params.set('offset', 20 * (Number(pageNumber) - 1) + '');
        router.push(`?${params.toString()}`);
        router.refresh();
        setCurPage(+pageNumber);
        setTitle(params.get('title') || '');
        setChip(params.getAll('가격'));
        fetchData({
          offset: 20 * (Number(pageNumber) - 1),
          count: 20,
          filter_conditions,
          setData,
        });
      }}
      $fontColor={fontColor}
      $backgroundColor={backgroundColor}
    >
      {pageNumber}
    </PaginationButtonStyle>
  );
};

export default PaginationButton;
