import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from 'rsuite';
import Input from '../../../components/registration/input/Input';
import RegistrationWrapper from '../../../components/registration/registrationWrapper/RegistrationWrapper';
import Select from '../../../components/registration/select/Select';
import { SECOND_STEP } from '../constants';
import { changeFieldValue } from '../registrationSlice';
import { selectSecondStepData, selectStep } from '../selectors';
import { invalidZipCodeMessage } from '../validationMessages';

const SecondStep = () => {
  const step = useSelector(selectStep);
  const dispatch = useDispatch(changeFieldValue);
  const secondPageData = useSelector(selectSecondStepData);
  const sexArr = ['Male', 'Female'];
  const dobValue =
    secondPageData.dob.value && new Date(secondPageData.dob.value);

  const handleChange = useCallback(
    (e) => {
      dispatch(
        changeFieldValue({ field: e.target.name, value: e.target.value })
      );
    },
    [dispatch]
  );
  if (step !== SECOND_STEP) {
    return null;
  }

  return (
    <RegistrationWrapper>
      <Input
        type="text"
        placeholder="Enter ZIP code, example: 12345"
        name="zipCode"
        handleChange={handleChange}
        isValid={secondPageData.zipCode.isValid}
        invalidMessage={invalidZipCodeMessage}
        value={secondPageData.zipCode.value}
      />
      <Select
        options={sexArr}
        placeholder="Choose your sex"
        handleChange={handleChange}
        name="sex"
        value={secondPageData.sex.value}
      />
      <DatePicker
        size="lg"
        placeholder="Select date of bird"
        style={{ marginBottom: 20 }}
        onChange={(e) => {
          const value = e !== null ? `${e}` : null;
          dispatch(changeFieldValue({ field: 'dob', value }));
        }}
        name="dob"
        value={dobValue}
      />
    </RegistrationWrapper>
  );
};

export default SecondStep;
