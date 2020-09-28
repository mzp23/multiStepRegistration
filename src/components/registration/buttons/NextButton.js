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
} from '../../../features/registration/selectors';

const NextButton = ({ step }) => {
  const dispatch = useDispatch();
  const isAllFilledOnFirstPage = useSelector(selectIsAllFilledOnFirstStep);
  const isAllFilledOnSecondPage = useSelector(selectIsAllFilledOnSecondStep);
  const isConsentToProcessingData = useSelector(selectConsentToProcessingData);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (step === FIRST_STEP) {
      setIsButtonDisabled(isAllFilledOnFirstPage);
    } else if (step === SECOND_STEP) {
      setIsButtonDisabled(isAllFilledOnSecondPage);
    } else if (step === LAST_STEP) {
      setIsButtonDisabled(isConsentToProcessingData);
    }
  }, [
    step,
    isAllFilledOnFirstPage,
    isAllFilledOnSecondPage,
    isConsentToProcessingData,
  ]);

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
          disabled={!isButtonDisabled}
        >
          {buttonTitle}
        </Button>
      </span>
      {!isButtonDisabled && (
        <ReactTooltip place="bottom" type="error" effect="solid">
          <span>{tooltipTitle}</span>
        </ReactTooltip>
      )}
    </>
  );
};

export default NextButton;
