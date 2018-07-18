"use strict";
exports.__esModule = true;
var username_validator_1 = require("./username-validator");
var pincode_validator_1 = require("./pincode-validator");
var v1 = new username_validator_1.UsernameValidator();
console.log('Username Validator: ', v1.isValid('hari kishna'));
var v2 = new pincode_validator_1.PincodeValidator();
console.log('Pincode Validator: ', v2.isValid('560001'));
