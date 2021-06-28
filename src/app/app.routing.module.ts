import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DynamicSectionFormComponent } from './dynamic-section-form/dynamic-section-form.component';
import { RegisterComponent } from './dynamic-form/example/pages/register/register.component';
import { SignupComponent } from './dynamic-form/my-implementation/ui/pages/signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dynamic-section', component: DynamicSectionFormComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
