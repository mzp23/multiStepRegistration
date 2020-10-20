import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import React from 'react';
import NextButton from '../NextButton';
import * as ReactRedux from 'react-redux';
import * as Selectors from '../../../../features/registration/selectors';
import {
  FIRST_STEP,
  LAST_STEP,
  SECOND_STEP,
} from '../../../../features/registration/constants';
import { increaseStep } from '../../../../features/registration/registrationSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: jest.fn(),
}));

const setUp = (
  step,
  isFirstPageFilled,
  isSecondPageFilled,
  isLastPageFilled
) => {
  jest.spyOn(Selectors, 'selectStep').mockReturnValue(step);
  jest
    .spyOn(Selectors, 'selectIsAllFilledOnFirstStep')
    .mockReturnValue(isFirstPageFilled);
  jest
    .spyOn(Selectors, 'selectIsAllFilledOnSecondStep')
    .mockReturnValue(isSecondPageFilled);
  jest
    .spyOn(Selectors, 'selectConsentToProcessingData')
    .mockReturnValue(isLastPageFilled);
  return mount(<NextButton />);
};

describe('<NextButton />', () => {
  const mockDispatch = jest.fn();

  beforeAll(() => {
    ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
  });
  beforeEach(() => {
    ReactRedux.useDispatch.mockClear();
  });

  it('should render disabled NextButton at first step then fields not filled', () => {
    const component = setUp(FIRST_STEP, false, false, false);
    expect(component.find('.rs-btn-default').props().disabled).toBeTruthy();
  });
  it('should render enabled NextButton at first step then all fields filled', () => {
    const component = setUp(FIRST_STEP, true, false, false);
    expect(component.find('.rs-btn-default').props().disabled).toBeFalsy();
  });
  it('should render disabled NextButton at second step then fields not filled', () => {
    const component = setUp(SECOND_STEP, false, false, false);
    expect(component.find('.rs-btn-default').props().disabled).toBeTruthy();
  });
  it('should render enabled NextButton at second step then all fields filled', () => {
    const component = setUp(SECOND_STEP, false, true, false);
    expect(component.find('.rs-btn-default').props().disabled).toBeFalsy();
  });
  it('should render disabled NextButton at last step then fields not filled', () => {
    const component = setUp(LAST_STEP, false, false, false);
    expect(component.find('.rs-btn-default').props().disabled).toBeTruthy();
  });
  it('should render enabled NextButton at last step then all fields filled', () => {
    const component = setUp(LAST_STEP, false, false, true);
    expect(component.find('.rs-btn-default').props().disabled).toBeFalsy();
  });

  // it('should call onClick callback then all fields filled at first page', () => {
  //   const component = setUp(FIRST_STEP, true, false, false);
  //   component.find('.rs-btn-default').simulate('click');
  //   expect(mockDispatch).toHaveBeenCalled();
  // });
});
