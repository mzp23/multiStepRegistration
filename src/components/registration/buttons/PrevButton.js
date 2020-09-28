import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'rsuite';
import { FIRST_STEP } from '../../../features/registration/constants';
import { decreaseStep } from '../../../features/registration/registrationSlice';

const PrevButton = ({ step }) => {
  const dispatch = useDispatch();
  const handleNextStep = useCallback(() => {
    dispatch(decreaseStep());
  }, [dispatch]);

  if (step === FIRST_STEP) {
    return null;
  }
  
  return (
    <Button type="button" onClick={handleNextStep}>
      prev
    </Button>
  );
};

export default PrevButton;
