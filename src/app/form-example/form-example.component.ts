import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  name = new FormControl('');

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });


  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  patchProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        city: '德阳'
      }
    });
  }


}
