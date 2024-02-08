'use client';

import styled from 'styled-components';

export const SearchInput = styled.input`
  ::placeholder {
    color: gray;
  }
  width: 100%;
  font-size: 0.875rem;
  padding-top: 12px;
  padding-bottom: 12px;
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
