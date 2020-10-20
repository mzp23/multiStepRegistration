import React from 'react';
import { mount, shallow } from 'enzyme';
import Buttons from '../Buttons';
import * as Selectors from '../../../../features/registration/selectors';
import {
  FIRST_STEP,
  LAST_STEP,
  SECOND_STEP,
} from '../../../../features/registration/constants';

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
  return mount(<Buttons />);
};
describe('<Buttons />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should not render prev Button at first step', () => {
    const component = setUp(FIRST_STEP);

    expect(component.find('PrevButton').find('.rs-btn').length).toBe(0);
    expect(component.find('NextButton').find('.rs-btn').length).toBe(1);
  });

  it('should render both Buttons at second step', () => {
    const component = setUp(SECOND_STEP);
    expect(component.find('PrevButton').find('.rs-btn').length).toBe(1);
    expect(component.find('NextButton').find('.rs-btn').length).toBe(1);
  });

  it('should render both Buttons correctly at last step', () => {
    const component = setUp(LAST_STEP);
    expect(component.find('PrevButton').find('.rs-btn').length).toBe(1);
    expect(component.find('NextButton').find('.rs-btn').length).toBe(1);
  });
});
