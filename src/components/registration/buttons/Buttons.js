import React from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import * as Styled from './Buttons.styled';

const Buttons = () => {

  return (
    <Styled.ButtonContainer>
      <PrevButton />
      <NextButton />
    </Styled.ButtonContainer>
  );
};

export default Buttons;
