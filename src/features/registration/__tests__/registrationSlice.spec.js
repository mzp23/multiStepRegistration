import { FIRST_STEP, LAST_STEP } from '../constants';

import registrationReducer, {
  increaseStep,
  decreaseStep,
  changeFieldValue,
  reset,
  changeConsentToProcessingData,
} from '../registrationSlice';

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

describe('registrationSlice', () => {
  describe('reducers', () => {
    it('returns initial state', () => {
      const nextState = registrationReducer(undefined, {});
      expect(nextState).toStrictEqual(initialState);
    });

    it('increment should increase registrationStep by 1', () => {
      const nextState = registrationReducer(initialState, increaseStep());
      expect(nextState.registrationStep).toBe(2);
    });
    it('increment should return LAST_STEP value of registrationStep at lastStep registration', () => {
      const nextState = registrationReducer(
        { registrationStep: LAST_STEP },
        increaseStep()
      );
      expect(nextState.registrationStep).toBe(LAST_STEP);
    });

    it('decrement decrease registrationStep by 1', () => {
      const nextState = registrationReducer(
        { registrationStep: 3 },
        decreaseStep()
      );
      expect(nextState.registrationStep).toBe(2);
    });
    it('decrement should return FIRST_STEP value of registrationStep at firstStep registration', () => {
      const nextState = registrationReducer(
        { registrationStep: FIRST_STEP },
        decreaseStep()
      );
      expect(nextState.registrationStep).toBe(FIRST_STEP);
    });
    it('changeFieldValue with field firstName should change firstName in state', () => {
      const nextState = registrationReducer(
        initialState,
        changeFieldValue({ field: 'firstName', value: 'John' })
      );
      expect(nextState.firstName).toStrictEqual({
        isValid: true,
        value: 'John',
      });
    });
    it('changeFieldValue with field secondName should change secondName in state', () => {
      const nextState = registrationReducer(
        initialState,
        changeFieldValue({ field: 'secondName', value: 'Done' })
      );
      expect(nextState.secondName).toStrictEqual({
        isValid: true,
        value: 'Done',
      });
    });
    it('changeFieldValue with field password should change password in state', () => {
      const nextState = registrationReducer(
        initialState,
        changeFieldValue({ field: 'password', value: '123456' })
      );
      expect(nextState.password).toStrictEqual({
        isValid: true,
        value: '123456',
      });
    });
    it('changeFieldValue with field zipCode should change zipCode in state', () => {
      const nextState = registrationReducer(
        initialState,
        changeFieldValue({ field: 'zipCode', value: '12345' })
      );
      expect(nextState.zipCode).toStrictEqual({
        isValid: true,
        value: '12345',
      });
    });
    it('changeFieldValue with field email should change email in state', () => {
      const nextState = registrationReducer(
        initialState,
        changeFieldValue({ field: 'email', value: '12345@dssad.rt' })
      );
      expect(nextState.email).toStrictEqual({
        isValid: true,
        value: '12345@dssad.rt',
      });
    });

    it('changeFieldValue with field sex should change sex in state', () => {
      const nextState = registrationReducer(
        initialState,
        changeFieldValue({ field: 'sex', value: 'male' })
      );
      expect(nextState.sex).toStrictEqual({ isValid: true, value: 'male' });
    });
    it('changeFieldValue with field dob should change dob in state', () => {
      const nextState = registrationReducer(
        initialState,
        changeFieldValue({ field: 'dob', value: '2020-01-20' })
      );
      expect(nextState.dob).toStrictEqual({
        isValid: true,
        value: '2020-01-20',
      });
    });
    it('changeFieldValue with field confirmedPassword should change confirmedPassword in state', () => {
      const nextState = registrationReducer(
        { ...initialState, password: { value: '123456', isValid: true } },
        changeFieldValue({ field: 'confirmedPassword', value: '123456' })
      );
      expect(nextState.confirmedPassword).toStrictEqual({
        isValid: true,
        value: '123456',
      });
    });
    it('changeConsentToProcessingData should change consentToProcessingData in state', () => {
      const nextState = registrationReducer(
        initialState,
        changeConsentToProcessingData(true)
      );
      expect(nextState.consentToProcessingData).toBe(true);
    });
    it('reset should reset state to initialState', () => {
      const nextState = registrationReducer(
        { ...initialState, password: { value: '123456', isValid: true } },
        reset()
      );
      expect(nextState).toStrictEqual(initialState);
    });
  });
});
