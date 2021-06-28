import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DynamicSectionFormComponent } from './dynamic-section-form/dynamic-section-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/example/pages/components/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/example/pages/dynamic-form/dynamic-form.component';
import { RegisterComponent } from './dynamic-form/example/pages/register/register.component';
import { FormLayoutComponent } from './dynamic-form/my-implementation/ui/shared/form-layout/form-layout.component';
import { SignupComponent } from './dynamic-form/my-implementation/ui/pages/signup/signup.component';
import { FormControlComponent } from './dynamic-form/my-implementation/ui/components/form-control/form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicSectionFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    RegisterComponent,
    FormLayoutComponent,
    SignupComponent,
    FormControlComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
