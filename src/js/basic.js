export default class Validator {
  static validateUsername(name) {
    const nameFormat = /^[a-z][\w-]*[a-z]$/i;
    const maxDigits = /\d{4,}/;
    return nameFormat.test(name) && !maxDigits.test(name);
  }
}
