import React from 'react';
import { useSelector } from 'react-redux';

import Buttons from '../../components/registration/buttons/Buttons';
import { FIRST_STEP, LAST_STEP, SECOND_STEP } from './constants';
import FirstStep from './firstStep/FirstStep';
import LastStep from './lastStep/LastStep';
import SecondStep from './secondStep/SecondStep';
import { selectStep } from './selectors';
import * as Styled from './Registration.styled';

const stepsMap = {
  [FIRST_STEP]: <FirstStep />,
  [SECOND_STEP]: <SecondStep />,
  [LAST_STEP]: <LastStep />,
};

const Registration = () => {
  const step = useSelector(selectStep);
  const stepTitle = step === LAST_STEP ? 'Conformation' : `Step ${step}`;

  return (
    <Styled.Wrapper>
      <Styled.Title>{stepTitle}</Styled.Title>
      {stepsMap[step]}
      <Buttons />
    </Styled.Wrapper>
  );
};

export default Registration;
