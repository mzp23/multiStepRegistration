export const isValidFirstName = (name) => name.length >= 3 && name.length <= 15;
export const isValidSecondName = (name) => name.length >= 3 && name.length <= 15;
export const isValidEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
export const isValidPassword = (password) => password.length >= 6;
export const isValidConfirmedPassword = (confirmPassword, password) => password === confirmPassword;