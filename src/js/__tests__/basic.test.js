import Validator from '../basic';

test('validateUsername method exists and works correctly', () => {
  expect(Boolean(Validator.validateUsername)).toBeTruthy();
  expect(Validator.validateUsername('abc123abc')).toBeTruthy();
  expect(Validator.validateUsername('-abc123abc-')).toBeFalsy();
  expect(Validator.validateUsername('_abc123abc_')).toBeFalsy();
  expect(Validator.validateUsername('1abc123abc1')).toBeFalsy();
  expect(Validator.validateUsername('abc1234abc')).toBeFalsy();
  expect(Validator.validateUsername('a.*+?^${}()|[]\\b')).toBeFalsy();
});
