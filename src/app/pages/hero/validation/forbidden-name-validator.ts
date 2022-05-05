import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(): ValidatorFn {
  const nameRe = /(star).*(wars)/i;
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
