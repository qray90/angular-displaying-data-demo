import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent implements OnInit {
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


  appForbiddenName(params) {
    console.log(params);
  }

  ngOnInit(): void {}


}
