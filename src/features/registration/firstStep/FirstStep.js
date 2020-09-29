import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFieldValue } from '../registrationSlice';
import {
  selectFirstStepData
} from '../selectors';
import Input from '../../../components/registration/input/Input';
import {
  invalidConfirmedPasswordMessage,
  invalidEmailMessage,
  invalidFirstNameMessage,
  invalidPasswordMessage,
  invalidSecondNameMessage,
} from '../validationMessages';
import * as Styled from '../Registration.styled'


const FirstStep = () => {
  const firstStepData = useSelector(selectFirstStepData);
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (e) => {
      dispatch(
        changeFieldValue({ field: e.target.name, value: e.target.value  })
      );
    },
    [dispatch]
  );

  return (
    <Styled.RegistrationWrapper>
      <Input
        type="text"
        name="firstName"
        placeholder="Enter your first name"
        isValid={firstStepData.firstName.isValid}
        invalidMessage={invalidFirstNameMessage}
        handleChange={handleChange}
        value={firstStepData.firstName.value}
      />
      <Input
        type="text"
        name="secondName"
        placeholder="Enter your second name"
        isValid={firstStepData.secondName.isValid}
        invalidMessage={invalidSecondNameMessage}
        handleChange={handleChange}
        value={firstStepData.secondName.value}
      />
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        isValid={firstStepData.email.isValid}
        invalidMessage={invalidEmailMessage}
        handleChange={handleChange}
        value={firstStepData.email.value}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter password"
        isValid={firstStepData.password.isValid}
        invalidMessage={invalidPasswordMessage}
        handleChange={handleChange}
        value={firstStepData.password.value}
      />
      <Input
        type="password"
        name="confirmedPassword"
        placeholder="Confirm password"
        isValid={firstStepData.confirmedPassword.isValid}
        invalidMessage={invalidConfirmedPasswordMessage}
        handleChange={handleChange}
        value={firstStepData.confirmedPassword.value}
      />
    </Styled.RegistrationWrapper>
  );
};

export default FirstStep;
