import { Dispatch, SetStateAction } from 'react';
import {
  FilterChipArea,
  FilterTitleArea,
} from '../_styles/styledComponentStyles';
import Chip from './Chip';

type Props = {
  setCurPage: Dispatch<SetStateAction<number>>;
};

const FilterArea = ({ setCurPage }: Props) => {
  const filterTitle = ['가격'];
  const filterChip = [['무료', '유료', '구독']];
  return (
    <div className=' flex-col'>
      {filterTitle.map((title, i) => (
        <div
          key={i}
          className=' flex border-b border-b-[#e1e2e4] border-solid bg-white'
        >
          <FilterTitleArea>
            <div>{title}</div>
          </FilterTitleArea>
          <FilterChipArea>
            {filterChip[i].map((a) => (
              <Chip
                key={a}
                filterTitle={title}
                filterChip={a}
                setCurPage={setCurPage}
              />
            ))}
          </FilterChipArea>
        </div>
      ))}
    </div>
  );
};

export default FilterArea;
