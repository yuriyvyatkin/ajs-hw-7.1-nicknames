import Validator from '../basic';

test('validateUsername method exists and works correctly', () => {
  expect(Boolean(Validator.validateUsername)).toBeTruthy();
  expect(Validator.validateUsername('aBc123-456xYz')).toBeTruthy();
  expect(Validator.validateUsername('gIj78_90uVw')).toBeTruthy();
  expect(Validator.validateUsername('-name')).toBeFalsy();
  expect(Validator.validateUsername('name-')).toBeFalsy();
  expect(Validator.validateUsername('_name')).toBeFalsy();
  expect(Validator.validateUsername('name_')).toBeFalsy();
  expect(Validator.validateUsername('1name')).toBeFalsy();
  expect(Validator.validateUsername('name1')).toBeFalsy();
  expect(Validator.validateUsername('na1234me')).toBeFalsy();
  expect(Validator.validateUsername('na.me')).toBeFalsy();
  expect(Validator.validateUsername('na!me')).toBeFalsy();
  expect(Validator.validateUsername('na[me')).toBeFalsy();
  expect(Validator.validateUsername('na|me')).toBeFalsy();
});
