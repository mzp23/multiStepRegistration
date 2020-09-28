import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from 'rsuite';
import styled from 'styled-components';
import Input from '../../../components/registration/input/Input';
import RegistrationWrapper from '../../../components/registration/registrationWrapper/RegistrationWrapper';
import formatDate from '../../../helpers/formatDate';
import { LAST_STEP } from '../constants';
import { changeConsentToProcessingData } from '../registrationSlice';
import {
  selectFirstStepData,
  selectSecondStepData,
  selectStep,
} from '../selectors';

const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Label = styled.label`
  width: 30%;
`;

const LastStep = () => {
  const step = useSelector(selectStep);
  const firstStepData = useSelector(selectFirstStepData);
  const secondPageData = useSelector(selectSecondStepData);

  const dispatch = useDispatch();
  if (step !== LAST_STEP) {
    return null;
  }

  return (
    <RegistrationWrapper>
      <form>
        <InputContainer>
          <Label>First Name: </Label>
          <Input
            value={firstStepData.firstName.value}
            name="firstName"
            disabled={true}
          />
        </InputContainer>
        <InputContainer>
          <Label>Second Name: </Label>
          <Input
            value={firstStepData.secondName.value}
            name="secondName"
            disabled={true}
          />
        </InputContainer>
        <InputContainer>
          <Label>Email: </Label>
          <Input
            value={firstStepData.email.value}
            name="email"
            disabled={true}
          />
        </InputContainer>
        <InputContainer>
          <Label>Date of birth: </Label>
          <Input
            value={formatDate(secondPageData.dob.value)}
            name="dob"
            disabled={true}
          />
        </InputContainer>
        <InputContainer>
          <Label>Sex: </Label>
          <Input value={secondPageData.sex.value} name="dob" disabled={true} />
        </InputContainer>
        <InputContainer>
          <Label>Zip Code: </Label>
          <Input
            value={secondPageData.zipCode.value}
            name="dob"
            disabled={true}
          />
        </InputContainer>
        <Checkbox
          style={{ display: 'flex', justifyContent: 'center' }}
          onChange={(_, isChecked) =>
            dispatch(changeConsentToProcessingData(isChecked))
          }
          name="consentToProcessingData"
        >
          I agree to the data processing
        </Checkbox>
      </form>
    </RegistrationWrapper>
  );
};

export default LastStep;
