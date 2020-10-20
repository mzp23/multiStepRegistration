import configureStore from 'redux-mock-store';
import {
  selectConfirmedPassword,
  selectFirstName,
  selectIsAllFilledOnFirstStep,
  selectSecondName,
} from '../selectors';

const initialState = {
  registration: {
    firstName: {
      value: '',
      isValid: false,
    },
    secondName: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
    confirmedPassword: {
      value: '',
      isValid: false,
    },
    zipCode: {
      value: '',
      isValid: false,
    },
    email: {
      value: '',
      isValid: false,
    },
    sex: {
      value: '',
      isValid: false,
    },
    dob: {
      value: null,
      isValid: false,
    },
    consentToProcessingData: false,
    registrationStep: 1,
  },
};

const mockStore = configureStore();

describe('selector', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('selectFirstName should return correct value', () => {
    expect(selectFirstName(store.getState())).toStrictEqual({
      isValid: false,
      value: '',
    });
  });
  it('selectFirstName should return correct value', () => {
    expect(selectSecondName(store.getState())).toStrictEqual({
      isValid: false,
      value: '',
    });
  });
  it('selectPassword should return correct value', () => {
    expect(selectFirstName(store.getState())).toStrictEqual({
      isValid: false,
      value: '',
    });
  });
  it('selectFirstName should return correct value', () => {
    expect(selectConfirmedPassword(store.getState())).toStrictEqual({
      isValid: false,
      value: '',
    });
  });
  it('selectAge should return correct value', () => {
    expect(selectConfirmedPassword(store.getState())).toStrictEqual({
      isValid: false,
      value: '',
    });
  });
  it('selectIsAllFilledOnFirstStep should return correct value', () => {
    expect(selectIsAllFilledOnFirstStep(store.getState())).toBe(false);
  });
});
