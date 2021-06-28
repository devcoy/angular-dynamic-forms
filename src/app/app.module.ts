import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DynamicSectionFormComponent } from './pages/dynamic-section-form/dynamic-section-form.component';
import { DynamicFormQuestionComponent } from './pages/components/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicSectionFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
