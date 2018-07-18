"use strict";
exports.__esModule = true;
var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.prototype.isValid = function (s) {
        console.log('UsernameValidator -> s:', s);
        return s.indexOf(' ') < 0;
    };
    return UsernameValidator;
}());
exports.UsernameValidator = UsernameValidator;
