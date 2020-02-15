import { FormGroup, FormControl } from '@angular/forms';

export const passwordsValidator = (group: FormGroup) => {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  const valid: boolean = password.value === pconfirm.value;
  return valid
    ? null
    : {
        equal: {
          message: '两次密码不一致'
        }
      };
};

export const usernameValidator = (control: FormControl) => {
  const username = control.value;

  return username.indexOf('bob') > -1
    ? { valid: { message: '不能含有bob' } }
    : null;
};
