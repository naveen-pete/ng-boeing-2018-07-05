namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }

  export class UsernameValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.indexOf(' ') < 0;
    }
  }

  export class PincodeValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.length === 6;
    }
  }
}

const v1 = new Validation.UsernameValidator();
console.log('Username Validator: ', v1.isValid('harikishna'));

const v2 = new Validation.PincodeValidator();
console.log('Pincode Validator: ', v2.isValid('560001'));
