/// <reference path="./string-validator.ts" />
/// <reference path="./username-validator.ts" />
/// <reference path="./pincode-validator.ts" />

// import uv = Validation.UsernameValidator;
const v1 = new Validation.UsernameValidator();
console.log('Username Validator: ', v1.isValid('hari kishna'));

const v2 = new Validation.PincodeValidator();
console.log('Pincode Validator: ', v2.isValid('560001'));
