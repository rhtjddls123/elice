// 글로벌 타입 지정

export type chipButtonType = {
  $backgroundColor: string;
  $fontColor: string;
};

export interface OrgCourseListResponses {
  courseCount: number;
  courses: {
    // courseType: number;
    // tags: string[];
    // classType: number;
    // enrolledRolePeriod: null | string;
    // enrolledRoleBeginDatetime: number | null;
    // enrolledRoleEndDatetime: number | null;
    // beginDatetime: number;
    // endDatetime: null | number;
    // isDiscounted: boolean;
    // discountedPrice: string;
    // discountedPriceUsd: string;
    // discountRate: null | any;
    // priceUsd: string;
    id: number;
    title: string;
    short_description: string;
    logo_file_url: null | string;
    price: string;
    enroll_type: number;
    is_free: boolean;
  }[];
}

export type filterConditionsType = {
  $and: [
    { title?: string },
    { $or: [{ enroll_type?: number; is_free?: boolean }] },
  ];
};
export type searchCourseType = {
  id: number;
  title: string;
  isFree: boolean;
  price: string;
  description: string;
  logoFile: string | null;
  enrollType: number;
};
