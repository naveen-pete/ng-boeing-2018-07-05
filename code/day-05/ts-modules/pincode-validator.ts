import { StringValidator } from './string-validator';

export class PincodeValidator implements StringValidator {
  isValid(s: string): boolean {
    console.log('PincodeValidator -> s:', s);
    return s.length === 6;
  }
}
