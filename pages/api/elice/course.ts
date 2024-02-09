import { OrgCourseListResponses, searchCourseType } from '@/app/_types/type';
import { NextApiRequest, NextApiResponse } from 'next';

type dataType = {
  offset: string;
  count: string;
  filter: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const data = req.query as dataType;
    const filter = JSON.parse(data.filter);
    if (!filter.$and[0].title) {
      delete filter.$and[0].title;
    }
    const result: searchCourseType[] = await fetch(
      `${process.env.ELICE_API}?offset=${data.offset}&count=${data.count}&filter_conditions=${JSON.stringify(filter)}`
    )
      .then((res) => res.json())
      .then((data: OrgCourseListResponses) => {
        const arr = [] as OrgCourseListResponses['courses'];
        for (const i of data.courses) {
          arr.push(i);
        }
        return arr.map((a) => {
          return {
            id: a.id,
            title: a.title,
            isFree: a.is_free,
            price: a.price,
            description: a.short_description,
            logoFile: a.logo_file_url,
            enrollType: a.enroll_type,
          };
        });
      });

    return res.status(200).json(result);
  } else {
    return res.status(500).json('잘못된 요청입니다.');
  }
}
