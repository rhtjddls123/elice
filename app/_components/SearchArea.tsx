import Image from 'next/image';
import { SearchInput } from '../_styles/styledComponentStyles';

const SearchArea = () => {
  return (
    <div className=' w-full border border-[#c9cacc] rounded bg-white my-3 flex'>
      <Image
        src={'/serchIcon.svg'}
        width={16}
        height={16}
        alt='serchIcon'
        className=' mx-4'
      ></Image>
      <SearchInput placeholder='배우고싶은 언어, 기술을 검색해 보세요'></SearchInput>
    </div>
  );
};

export default SearchArea;
