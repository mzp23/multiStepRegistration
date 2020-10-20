import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { Button } from 'rsuite';
import {
  FIRST_STEP,
  LAST_STEP,
  SECOND_STEP,
} from '../../../features/registration/constants';
import {
  increaseStep,
  reset,
} from '../../../features/registration/registrationSlice';
import {
  selectConsentToProcessingData,
  selectIsAllFilledOnFirstStep,
  selectIsAllFilledOnSecondStep,
  selectStep,
} from '../../../features/registration/selectors';

const NextButton = () => {
  const step = useSelector(selectStep);
  const dispatch = useDispatch();
  const isAllFilledOnFirstPage = useSelector(selectIsAllFilledOnFirstStep);
  const isAllFilledOnSecondPage = useSelector(selectIsAllFilledOnSecondStep);
  const isConsentToProcessingData = useSelector(selectConsentToProcessingData);
  const Map = {
    [FIRST_STEP]: isAllFilledOnFirstPage,
    [SECOND_STEP]: isAllFilledOnSecondPage,
    [LAST_STEP]: isConsentToProcessingData,
  };

  const handleNextStep = useCallback(() => {
    if (step !== LAST_STEP) {
      dispatch(increaseStep());
    } else {
      dispatch(reset());
    }
  }, [dispatch, step]);

  const buttonTitle = step === LAST_STEP ? 'submit' : 'next';
  const buttonType = step === LAST_STEP ? 'submit' : 'button';
  const tooltipTitle =
    step === LAST_STEP ? 'accept the data processing' : 'fill all fields';

  return (
    <>
      <span data-tip>
        <Button
          style={{ margin: '0 5px' }}
          type={buttonType}
          onClick={handleNextStep}
          disabled={!Map[step]}
        >
          {buttonTitle}
        </Button>
      </span>
      {!Map[step] && (
        <ReactTooltip place="bottom" type="error" effect="solid">
          <span>{tooltipTitle}</span>
        </ReactTooltip>
      )}
    </>
  );
};

export default NextButton;
