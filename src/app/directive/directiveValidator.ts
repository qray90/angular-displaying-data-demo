import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidatorFn,
  Validator
} from '@angular/forms';
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden: boolean = new RegExp(nameRe, 'ig').test(control.value);
    return forbidden ? { msg: { value: '不能包含bob, 忽略大小写' } } : null;
  };
}

@Directive({
  selector: '[appValidatePosition]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatePositionDirective,
      multi: true
    }
  ]
})
export class ValidatePositionDirective implements Validator {
  @Input('appValidatePosition') validateCondition: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.validateCondition
      ? forbiddenNameValidator(new RegExp(this.validateCondition))(control)
      : null;
  }
}
