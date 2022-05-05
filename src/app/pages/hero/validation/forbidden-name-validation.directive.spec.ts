import { FormControl } from '@angular/forms';
import { ForbiddenNameValidationDirective } from './forbidden-name-validation.directive';

describe('ForbiddenNameValidationDirective', () => {
  it('should create an instance', () => {
    const directive = new ForbiddenNameValidationDirective();
    expect(directive).toBeTruthy();
  });

  it('should raise an error for star wars', () => {
    const starWars = 'star wars'
    const control = new FormControl(starWars);
    const directive = new ForbiddenNameValidationDirective();
    expect(directive.validate(control)).toEqual({ 'forbiddenName': { 'value': starWars } });
  });

  it('should not raise an error for star trek', () => {
    const starTrek = 'star trek'
    const control = new FormControl(starTrek);
    const directive = new ForbiddenNameValidationDirective();
    expect(directive.validate(control)).toBeNull();
  });

});
