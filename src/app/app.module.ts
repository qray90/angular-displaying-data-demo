import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormValidateComponent } from './form-validate/form-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ItemDetailComponent,
    FormExampleComponent,
    HeroFormComponent,
    FormValidateComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
