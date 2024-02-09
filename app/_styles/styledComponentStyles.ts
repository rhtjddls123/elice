'use client';

import styled from 'styled-components';
import { chipButtonType } from '../_types/type';

export const SearchInput = styled.input`
  ::placeholder {
    color: gray;
  }
  width: 100%;
  font-size: 0.875rem;
  padding-top: 12px;
  padding-bottom: 12px;
`;
export const ChipButton = styled.button<chipButtonType>`
  margin: 0.5rem;
  background-color: ${(props) => props.$backgroundColor || '#f0f1f3'};
  color: ${(props) => props.$fontColor || '#000000'};
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 1.875rem;
  font-family: inherit;
  &:hover {
    filter: brightness(0.8);
  }
`;
export const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 296px;
  height: 338px;
  border-radius: 8px;
`;

export const CardBody = styled.div`
  position: relative;
  height: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const CardLabel = styled.label`
  position: absolute;
  bottom: 28px;
  font-size: 12px;
  font-weight: bold;
  color: #524fa1;
`;

export const CardTitle = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const CardDescription = styled.label`
  margin-top: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #5e5f61;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const CardIconText = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    align-items: center;
  }
  & img {
    vertical-align: middle;
    height: 24px;
    width: 24px;
  }
  & label {
    vertical-align: middle;
    font-size: 12px;
    color: #7d7e80;
    margin-left: 8px;
  }
`;

export const CardLogo = styled.div`
  width: 52px;
  height: 52px;
  > img {
    max-width: 52px;
    max-height: 52px;
    min-width: 52px;
    min-height: 52px;
  }
`;

export const FilterTitleArea = styled.div`
  background-color: #f9fafc;
  border-right-width: 1px;
  border-right-color: #e1e2e4;
  border-style: solid;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  padding-left: 1rem;
  padding-right: 1rem;
  min-width: 6rem;
  & > div {
    font-weight: 700;
    border-bottom-width: 1px;
    border-bottom-color: #e1e2e4;
    border-style: solid;
  }
`;

export const FilterChipArea = styled.div`
  background-color: white;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
