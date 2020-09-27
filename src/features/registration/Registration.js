import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Buttons from '../../components/registration/buttons/Buttons';
import FirstStep from '../../components/registration/firstStep/FirstStep';
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
  const stepTitle = {
    1: 'Step 1',
    2: 'Step 2',
    3: 'Conformation',
  };

  return (
    <Wrapper>
      <Title>{stepTitle[step]}</Title>
      <FirstStep />
      <Buttons />
    </Wrapper>
  );
};

export default Registration;
