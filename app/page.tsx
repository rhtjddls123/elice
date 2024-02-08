import CourseArea from './_components/CourseArea';
import FilterArea from './_components/FilterArea';
import SearchArea from './_components/SearchArea';

export default function Home() {
  const arr = new Array(20).fill(0);
  return (
    <>
      <SearchArea></SearchArea>
      <FilterArea></FilterArea>
      <div className=' flex flex-row flex-wrap gap-8 justify-center pt-4'>
        {arr.map((a) => (
          <CourseArea key={a}></CourseArea>
        ))}
      </div>
    </>
  );
}
