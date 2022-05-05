import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { forbiddenNameValidator } from './forbidden-name-validator';


@Directive({
  selector: '[forbiddenName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenNameValidationDirective,
    multi: true
  }]
})
export class ForbiddenNameValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return forbiddenNameValidator()(control);
  }
}
