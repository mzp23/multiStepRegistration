import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import PrevButton from '../PrevButton';
import * as ReactRedux from 'react-redux';
import { decreaseStep } from '../../../../features/registration/registrationSlice';

const setUp = () => shallow(<PrevButton />);
const initialState = {
  registrationStep: 2,
};
const mockStore = configureStore();

describe('<PrevButton />', () => {
  const mockDispatch = jest.fn();
  let component;
  const store = mockStore(initialState);
  beforeAll(() => {
    ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
  });

  beforeEach(() => {
    ReactRedux.useDispatch.mockClear();
    component = setUp();
  });
  it('should render PrevButton correct', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call onClick callback', () => {
    component.simulate('click');
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(decreaseStep());
  });
});
