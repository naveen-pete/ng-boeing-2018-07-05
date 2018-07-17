/// <reference path="./string-validator.ts" />

namespace Validation {
  export class PincodeValidator implements StringValidator {
    isValid(s: string): boolean {
      console.log('PincodeValidator -> s:', s);
      return s.length === 6;
    }
  }
}
