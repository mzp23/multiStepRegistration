import { createSlice } from '@reduxjs/toolkit';
import {
  isValidEmail,
  isValidFirstName,
  isValidPassword,
  isValidSecondName,
  isValidConfirmedPassword,
} from '../../helpers/validation';
import { FIRST_STEP, LAST_STEP } from './constants';

const initialState = {
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
  age: {
    value: 0,
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
    value: '',
    isValid: false,
  },
  consentToProcessingData: {
    value: false,
    isValid: false,
  },
  registrationStep: 1,
};

const validationMap = {
  firstName: isValidFirstName,
  secondName: isValidSecondName,
  email: isValidEmail,
  password: isValidPassword,
  confirmedPassword: isValidConfirmedPassword,
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    changeFieldValue: (state, { payload }) => {
      state[payload.field].value = payload.value;

      if (payload.field === 'confirmedPassword') {
        state[payload.field].isValid = validationMap[payload.field](
          payload.value,
          state.password.value
        );
      } else {
        state[payload.field].isValid = validationMap[payload.field](
          payload.value
        );
      }
    },
    increaseStep: (state) => {
      if (state.registrationStep >= LAST_STEP) {
        state.registrationStep = LAST_STEP;
      } else {
        state.registrationStep = state.registrationStep + 1;
      }
    },
    decreaseStep: (state) => {
      if (state.registrationStep <= FIRST_STEP) {
        state.registrationStep = FIRST_STEP;
      } else {
        state.registrationStep = state.registrationStep - 1;
      }
    },
  },
});

export const {
  increaseStep,
  decreaseStep,
  changeFieldValue,
} = registrationSlice.actions;

export default registrationSlice.reducer;
