import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectStep } from '../../../features/registration/selectors';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const ButtonContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const Buttons = () => {
  const step = useSelector(selectStep);

  return (
    <ButtonContainer>
      <PrevButton step={step} />
      <NextButton step={step} />
    </ButtonContainer>
  );
};

export default Buttons;
