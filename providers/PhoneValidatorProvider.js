'use strict'


/** .type {typeof import('@adonisjs/fold')} */
const { ServiceProvider } = require('@adonisjs/fold');
const Validator = use('@adonisjs/validator/src/Validator');
const { parsePhoneNumberFromString } = use('libphonenumber-js');

class PhoneValidatorProvider extends ServiceProvider {

    boot() {

        const existsFn = async (data, field, message, args, get) => {
            const value = get(data, field);
            if (!value) {
                /**
                 * skip validation if value is not defined. `required` rule
                 * should take care of it.
                 */
                return
            }

            const phoneNumber = parsePhoneNumberFromString(value, args[0].toUpperCase());
            if (!phoneNumber.isValid()) {
                throw `${field} is invalid`
            }
        };

        Validator.extend('phone', existsFn);
    }
}


module.exports = PhoneValidatorProvider;
