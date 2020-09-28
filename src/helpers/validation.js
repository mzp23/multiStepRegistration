export const isValidFirstName = (name) => name.length >= 3 && name.length <= 15;
export const isValidSecondName = (name) => name.length >= 3 && name.length <= 15;
export const isValidEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
export const isValidPassword = (password) => password.length >= 6;
export const isValidConfirmedPassword = (confirmPassword) => confirmPassword >= 6;
export const isValidZipCode = (zipCode) => /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode);
export const isValidSex = (sex) => sex.length > 0;
export const isValidDob = (dob) => dob !== null && dob.length > 0;