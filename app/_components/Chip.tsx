'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCourse } from '../_hooks/course-context';
import { ChipButton } from '../_styles/styledComponentStyles';
import { fetchData } from '../_utils/fetchData';

type Props = {
  filterTitle: string;
  filterChip: string;
};

const Chip = ({ filterTitle, filterChip }: Props) => {
  const [buttonToggle, setButtonToggle] = useState<boolean>(false);
  const [visit, setVisit] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams?.toString());
  const { filter_conditions, setChip, setData } = useCourse();

  useEffect(() => {
    if (params.has(filterTitle, filterChip)) {
      setButtonToggle(true);
      setVisit(true);
    } else {
      setVisit(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (buttonToggle && !params.has(filterTitle, filterChip)) {
      params.append(filterTitle, filterChip);
      router.push(`?${params.toString()}`);
    } else if (!buttonToggle && visit) {
      params.delete(filterTitle, filterChip);
      router.push(`?${params.toString()}`);
    }
    if (visit) {
      setChip(params.getAll(filterTitle));
      fetchData({ offset: 0, count: 5, filter_conditions, setData });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonToggle]);

  return (
    <ChipButton
      onClick={() => setButtonToggle((pre) => !pre)}
      $backgroundColor={buttonToggle ? '#524fa1' : '#f0f1f3'}
      $fontColor={buttonToggle ? '#ffffff' : '#000000'}
    >
      {filterChip}
    </ChipButton>
  );
};

export default Chip;
