import { Directive, input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

// Define the EmailValidatorDirective as a custom validator for email fields
@Directive({
  selector: '[appEmailValidator]', // The directive can be applied to any element with the 'appEmailValidator' attribute
  standalone: true, // Specifies that the directive is standalone and doesn't require other modules to function
  providers: [
    {
      // Register this directive as a validator in the Angular forms validation system
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective, // Use this directive as the validator
      multi: true, // Allows multiple validators to be used on the same control
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  constructor() {}

  // Create a required email property using input() signal
  email = input.required<string>({
    alias: 'appEmailValidator', // Alias for easier referencing
  });

  // Implement the `validate` method from the Validator interface
  validate(c: FormControl) {
    // Compare the current value of the control (email) with the required email value
    return c.value === this.email()
      ? null // If the value matches, the control is valid
      : {
          confirm_email: true, // If the value doesn't match, return an error
        };
  }
}
