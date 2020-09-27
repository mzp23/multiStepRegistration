import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import {
  FIRST_STEP,
  LAST_STEP
} from '../../../features/registration/constants';
import { increaseStep } from '../../../features/registration/registrationSlice';
import { selectIsAllFilledOnFirstStep } from '../../../features/registration/selectors';

const NextButton = ({ step }) => {
  const dispatch = useDispatch();
  const isAllFilledOnFirstPage = useSelector(selectIsAllFilledOnFirstStep);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (step === FIRST_STEP) {
      setIsButtonDisabled(isAllFilledOnFirstPage);
    }
  }, [step, isAllFilledOnFirstPage]);

  const handleNextStep = useCallback(() => {
    dispatch(increaseStep());
  }, [dispatch]);

  const buttonTitle = step === LAST_STEP ? 'submit' : 'next';
  const buttonType = step === LAST_STEP ? 'submit' : 'button';
  const tooltipTitle =
    step === LAST_STEP ? 'accept the data processing' : 'fill all fields';

  return (
    <>
      <span data-tip>
        <button
          type={buttonType}
          onClick={handleNextStep}
          disabled={!isButtonDisabled}
        >
          {buttonTitle}
        </button>
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
