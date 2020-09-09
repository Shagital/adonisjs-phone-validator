# Adonisjs Phone Validator ▲

## Introduction
Adds phone number validation functionality to [Adonisjs](https://github.com/adonisjs/core) on the [JS port](https://github.com/catamphetamine/libphonenumber-js) of Google's [libphonenumber](https://github.com/google/libphonenumber) API by [catamphetamine](https://github.com/catamphetamine)

### Step One - Install
#### Via Adonis CLI
`adonis install @shagital/adonisjs-phone-validator`

#### Via npm/yarn
- Install package
```shell
// via npm
npm require @shagital/adonisjs-phone-validator

// via yarn
yarn add @shagital/adonisjs-phone-validator
```


### Step Two - Register Provider
Open `start/app.js` and add `@shagital/adonisjs-phone/providers/PhoneValidatorProvider` to the `providers` array

## Usage
You use the `phone` validation syntax just like you'd normally do validation in Adonisjs. Examples below:
NOTE: The country 2-character ISO code is required. You can find all supported codes [here](https://www.iban.com/country-codes)
### controller method
```js
//app/Controllers/Http/UserController

const { validate } = use('Validator')

class UserController {

  async store ({ request, session, response }) {
    const rules = {
      phone: 'required|phone:NG', // validate Nigerian phone number
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      session
        .withErrors(validation.messages())
     
      return response.redirect('back')
    }

    return 'Validation passed'
  }
}
```

### Validator
```js
//app/Validators/StoreUser.js

'use strict'

class StoreUser {
  get rules () {
    return {
      phone: 'required|phone:US', // validate a US phone number
    }
  }
}
```


## Contribution

Free for all, if you find an issue with the package or think of an improvement, please send in a PR.
