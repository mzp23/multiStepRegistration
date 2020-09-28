import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Buttons from '../../components/registration/buttons/Buttons';
import { LAST_STEP } from './constants';
import FirstStep from './firstStep/FirstStep';
import SecondStep from './secondStep/SecondStep';
import { selectStep } from './selectors';

const Wrapper = styled.div`
  padding-top: 15%;
  height: 100vh;
`;
const Title = styled.h1`
  color: #a1a1a1;
  text-align: center;
  margin-bottom: 10px;
`;
const Registration = () => {
  const step = useSelector(selectStep);
  const stepTitle = step === LAST_STEP ? 'Conformation' : `Step ${step}`;

  return (
    <Wrapper>
      <Title>{stepTitle}</Title>
      <FirstStep />
      <SecondStep />
      <Buttons />
    </Wrapper>
  );
};

export default Registration;
