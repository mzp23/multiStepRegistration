import { shallow } from 'enzyme';
import React from 'react'
import { FIRST_STEP, LAST_STEP, SECOND_STEP } from '../constants';
import FirstStep from '../firstStep/FirstStep';
import LastStep from '../lastStep/LastStep';
import SecondStep from '../secondStep/SecondStep';
import * as Selectors from '../selectors';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn())
}))

const stepsMap = {
    [FIRST_STEP]: <FirstStep />,
    [SECOND_STEP]: <SecondStep />,
    [LAST_STEP]: <LastStep />,
  };
  
const setUp = (step) => {
    jest.spyOn(Selectors, 'selectStep').mockReturnValue(step);
    jest.spyOn(Selectors, 'selectFirstName').mockReturnValue('My name');
    return shallow(stepsMap[step])
}

describe('<Registration />', () => {
    it('should render only firstStep page on step 1', () => {
        const component = setUp(FIRST_STEP);
        console.log(component.debug())
    });
});