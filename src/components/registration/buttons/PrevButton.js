import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'rsuite';
import { decreaseStep } from '../../../features/registration/registrationSlice';

const PrevButton = () => {
  const dispatch = useDispatch();
  const handlePrevStep = useCallback(() => {
    dispatch(decreaseStep());
  }, [dispatch]);

  return (
    <Button type="button" onClick={handlePrevStep}>
      prev
    </Button>
  );
};

export default PrevButton;
