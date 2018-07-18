"use strict";
exports.__esModule = true;
var PincodeValidator = /** @class */ (function () {
    function PincodeValidator() {
    }
    PincodeValidator.prototype.isValid = function (s) {
        console.log('PincodeValidator -> s:', s);
        return s.length === 6;
    };
    return PincodeValidator;
}());
exports.PincodeValidator = PincodeValidator;
