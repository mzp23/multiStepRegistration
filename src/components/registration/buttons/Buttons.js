import React from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import * as Styled from './Buttons.styled';
import { useSelector } from 'react-redux';
import { selectStep } from '../../../features/registration/selectors';
import { FIRST_STEP } from '../../../features/registration/constants';

const Buttons = () => {
  const step = useSelector(selectStep);

  return (
    <Styled.ButtonContainer>
      {step !== FIRST_STEP && <PrevButton />}
      <NextButton />
    </Styled.ButtonContainer>
  );
};

export default Buttons;
