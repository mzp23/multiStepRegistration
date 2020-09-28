import { createSlice } from '@reduxjs/toolkit';
import {
  isValidEmail,
  isValidFirstName,
  isValidPassword,
  isValidSecondName,
  isValidConfirmedPassword,
  isValidZipCode,
  isValidDob,
  isValidSex,
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
};

const validationMap = {
  firstName: isValidFirstName,
  secondName: isValidSecondName,
  email: isValidEmail,
  password: isValidPassword,
  confirmedPassword: isValidConfirmedPassword,
  zipCode: isValidZipCode,
  dob: isValidDob,
  sex: isValidSex,
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
    changeConsentToProcessingData: (state, { payload }) => {
      state.consentToProcessingData = payload;
    },
    reset: state => initialState,
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
  changeConsentToProcessingData,
  reset,
} = registrationSlice.actions;

export default registrationSlice.reducer;
