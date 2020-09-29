import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from 'rsuite';
import Input from '../../../components/registration/input/Input';
import formatDate from '../../../helpers/formatDate';
import { changeConsentToProcessingData } from '../registrationSlice';
import { selectFirstStepData, selectSecondStepData } from '../selectors';
import * as Styled from '../Registration.styled';

const LastStep = () => {
  const firstStepData = useSelector(selectFirstStepData);
  const secondPageData = useSelector(selectSecondStepData);

  const dispatch = useDispatch();

  return (
    <Styled.RegistrationWrapper>
      <form>
        <Styled.InputContainer>
          <Styled.Label>First Name: </Styled.Label>
          <Input
            value={firstStepData.firstName.value}
            name="firstName"
            disabled={true}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>Second Name: </Styled.Label>
          <Input
            value={firstStepData.secondName.value}
            name="secondName"
            disabled={true}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>Email: </Styled.Label>
          <Input
            value={firstStepData.email.value}
            name="email"
            disabled={true}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>Date of birth: </Styled.Label>
          <Input
            value={formatDate(secondPageData.dob.value)}
            name="dob"
            disabled={true}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>Sex: </Styled.Label>
          <Input value={secondPageData.sex.value} name="dob" disabled={true} />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>Zip Code: </Styled.Label>
          <Input
            value={secondPageData.zipCode.value}
            name="dob"
            disabled={true}
          />
        </Styled.InputContainer>
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
    </Styled.RegistrationWrapper>
  );
};

export default LastStep;
