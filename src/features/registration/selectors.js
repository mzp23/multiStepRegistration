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
export const selectIsAllFilledOnFirstStep = createSelector(
  selectFirstName,
  selectSecondName,
  selectPassword,
  selectConfirmedPassword,
  (firstName, secondName, password, confirmedPassword) =>
    firstName.isValid &&
    secondName.isValid &&
    password.isValid &&
    confirmedPassword.isValid
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
