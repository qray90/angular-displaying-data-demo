import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidateComponent } from './reactive-form-validate.component';

describe('ReactiveFormValidateComponent', () => {
  let component: ReactiveFormValidateComponent;
  let fixture: ComponentFixture<ReactiveFormValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
