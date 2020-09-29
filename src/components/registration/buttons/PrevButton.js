import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'rsuite';
import { FIRST_STEP } from '../../../features/registration/constants';
import { decreaseStep } from '../../../features/registration/registrationSlice';
import { selectStep } from '../../../features/registration/selectors';

const PrevButton = () => {
  const step = useSelector(selectStep)
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
