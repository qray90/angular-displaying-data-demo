import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent implements OnInit {
  heroForm;
  inputName = '';

  // 模板驱动表单验证的字段
  hero: Hero = {
    id: 1345,
    name: ''
  };

  // 响应式表单验证
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  constructor() {}





  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }

  ngOnInit(): void {
    // this.heroForm = new FormGroup({
    //   name: new FormControl(this.model.name, [
    //     Validators.required,
    //     Validators.minLength(4)
    //   ]),
    //   alertEgo: new FormControl(this.model.alterEgo),
    //   power: new FormControl(this.model.power, Validators.required)
    // });
  }


}
