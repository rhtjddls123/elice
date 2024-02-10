import Image from 'next/image';
import {
  CardBody,
  CardDescription,
  CardIconText,
  CardLabel,
  CardLogo,
  CardTitle,
  CourseCard,
} from '../_styles/styledComponentStyles';

type Props = {
  title: string;
  description: string;
  logoFile: string;
  enrollType: number;
  isFree?: boolean;
};

const CourseArea = ({
  title,
  description,
  logoFile,
  enrollType,
  isFree,
}: Props) => {
  const label = ['수업: 온라인', '기간: 무제한', '난이도: 미설정'];
  const icon = ['/serchIcon.svg', '/serchIcon.svg', '/serchIcon.svg'];
  return (
    <CourseCard>
      <CardBody>
        <div className=' flex flex-col'>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className=' flex justify-between'>
          <CardIconText>
            {label.map((a, i) => (
              <div key={i}>
                <Image
                  src={icon[i]}
                  width={24}
                  height={24}
                  alt='serchIcon'
                ></Image>
                <label>{a}</label>
              </div>
            ))}
          </CardIconText>
          <CardLogo>
            <Image
              src={logoFile || '/noImg.PNG'}
              width={52}
              height={52}
              alt='courseIcon'
            ></Image>
          </CardLogo>
        </div>
        <CardLabel>
          {enrollType === 4 ? '구독' : isFree ? '무료' : '유료'}
        </CardLabel>
      </CardBody>
    </CourseCard>
  );
};

export default CourseArea;
