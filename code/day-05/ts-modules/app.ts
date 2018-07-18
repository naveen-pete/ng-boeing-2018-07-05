import { UsernameValidator } from './username-validator';
import { PincodeValidator } from './pincode-validator';

const v1 = new UsernameValidator();
console.log('Username Validator: ', v1.isValid('hari kishna'));

const v2 = new PincodeValidator();
console.log('Pincode Validator: ', v2.isValid('560001'));
