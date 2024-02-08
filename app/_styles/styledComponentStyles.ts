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
  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 24px;
  padding-right: 24px;
`;
