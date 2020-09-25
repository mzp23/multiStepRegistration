import { createSlice } from '@reduxjs/toolkit';

export const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    firstName: '',
    secondName: '',
    age: 0,
    email: '',
    sex: '',
    dob: '',
    consentToProcessingData: false,
  },
  reducers: {
    changeFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    changeSecondName: (state, action) => {
      state.firstName = action.payload;
    },
    changeAge: (state, action) => {
      state.age = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeSex: (state, action) => {
      state.sex = action.payload;
    },
    changeDob: (state, action) => {
      state.dob = action.payload;
    },
    changeConsentToProcessingData: (state, action) => {
      state.consentToProcessingData = action.payload;
    },
  },
});

export const {
  changeAge,
  changeConsentToProcessingData,
  changeDob,
  changeEmail,
  changeFirstName,
  changeSecondName,
  changeSex,
} = registrationSlice.actions;

export default registrationSlice.reducer;
