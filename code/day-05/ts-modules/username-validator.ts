import { StringValidator } from './string-validator';

export class UsernameValidator implements StringValidator {
  isValid(s: string): boolean {
    console.log('UsernameValidator -> s:', s);
    return s.indexOf(' ') < 0;
  }
}
