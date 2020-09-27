import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
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
    <button type="button" onClick={handleNextStep}>
      prev
    </button>
  );
};

export default PrevButton;
