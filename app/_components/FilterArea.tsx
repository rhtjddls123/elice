import {
  FilterChipArea,
  FilterTitleArea,
} from '../_styles/styledComponentStyles';
import Chip from './Chip';

const FilterArea = () => {
  const filterTitle = ['난이도', '가격'];
  const filterChip = [
    ['입문', '초급', '중급'],
    ['무료', '유료'],
  ];
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
              <Chip key={a}>{a}</Chip>
            ))}
          </FilterChipArea>
        </div>
      ))}
    </div>
  );
};

export default FilterArea;
