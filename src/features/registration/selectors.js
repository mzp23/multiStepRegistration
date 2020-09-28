import { createSelector } from 'reselect';

export const selectFirstName = ({ registration }) => registration.firstName;
export const selectSecondName = ({ registration }) => registration.secondName;
export const selectPassword = ({ registration }) => registration.password;
export const selectConfirmedPassword = ({ registration }) =>
  registration.confirmedPassword;
export const selectAge = ({ registration }) => registration.age;
export const selectEmail = ({ registration }) => registration.email;
export const selectDob = ({ registration }) => registration.dob;
export const selectConsentToProcessingData = ({ registration }) =>
  registration.consentToProcessingData;
export const selectSex = ({ registration }) => registration.sex;
export const selectStep = ({ registration }) => registration.registrationStep;
export const selectZipCode = ({ registration }) => registration.zipCode;
export const selectIsAllFilledOnFirstStep = createSelector(
  selectFirstName,
  selectSecondName,
  selectPassword,
  selectConfirmedPassword,
  selectEmail,
  (firstName, secondName, password, confirmedPassword, email) =>
    firstName.isValid &&
    secondName.isValid &&
    password.isValid &&
    confirmedPassword.isValid &&
    email.isValid
);
export const selectFirstStepData = createSelector(
  selectFirstName,
  selectSecondName,
  selectEmail,
  selectPassword,
  selectConfirmedPassword,
  (firstName, secondName, email, password, confirmedPassword) => ({
    firstName,
    secondName,
    email,
    password,
    confirmedPassword,
  })
);
export const selectIsAllFilledOnSecondStep = createSelector(
  selectDob,
  selectSex,
  selectZipCode,
  (dob, sex, zipCode) => dob.isValid && sex.isValid && zipCode.isValid
);
export const selectSecondStepData = createSelector(
  selectDob,
  selectSex,
  selectZipCode,
  (dob, sex, zipCode) => ({
    dob,
    sex,
    zipCode,
  })
);
