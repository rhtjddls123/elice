import Chip from './_components/Chip';
import CourseArea from './_components/CourseArea';
import SearchArea from './_components/SearchArea';

export default function Home() {
  const arr = new Array(20).fill(0);
  return (
    <>
      <div>
        <SearchArea></SearchArea>
        <div className=' bg-white'>
          <Chip>sds</Chip>
        </div>
        <div className=' flex flex-row flex-wrap gap-8 justify-center'>
          {arr.map((a) => (
            <CourseArea key={a}></CourseArea>
          ))}
          di
        </div>
      </div>
    </>
  );
}
