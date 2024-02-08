'use client';

import { ReactNode, useReducer } from 'react';
import { ChipButton } from '../_styles/styledComponentStyles';

const Chip = ({ children }: { children: ReactNode }) => {
  const [buttonToggle, setButtonToggle] = useReducer((pre) => !pre, false);
  return (
    <ChipButton
      onClick={setButtonToggle}
      backgoundColor={buttonToggle ? '#524fa1' : '#f0f1f3'}
      fontColor={buttonToggle ? '#ffffff' : '#000000'}
    >
      {children}
    </ChipButton>
  );
};

export default Chip;
