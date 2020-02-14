import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validate',
  templateUrl: './reactive-form-validate.component.html',
  styleUrls: ['./reactive-form-validate.component.css']
})
export class ReactiveFormValidateComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  formModel = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    mobile: ['', this.mobileValidator],
    passwordsGroup: this.fb.group(
      {
        password: [''],
        pconfirm: ['']
      },
      {
        validator: this.equalValidator
      }
    )
  });

  // 自定义校验器
  /**
   * control: 参数类型可以为：FormGroup,FormControl,FormArray，返回一个对象
   * xxx(control: AbstractControl): {[key: string]: any} {
   *      return null;
   * }
   */

  //  验证手机号——单一字段
  mobileValidator(control: FormControl): any {
    const regs = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
    const valid = regs.test(control.value);
    console.log('mobile的校验结果是：', valid);
    return valid ? null : { mobile: true };
  }

  // 校验确认密码——同时校验几个字段
  equalValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const pconfirm: FormControl = group.get('pconfirm') as FormControl;
    const valid: boolean = password.value === pconfirm.value;
    console.log('密码校验结果：' + valid);
    return valid ? null : { equal: true };
  }

  onSubmit() {
    // 获取校验信息
    const info = this.formModel.get('username');
    console.log('校验信息', info);

    // 获取校验结果
    const isValide = this.formModel.get('username').valid;
    console.log('校验结果', isValide);

    // 获取错误信息
    const error = this.formModel.get('username').errors;
    console.log('错误信息', error);

    // 只有当formModel中所有的字段都是合法条件
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  ngOnInit(): void {}
}
