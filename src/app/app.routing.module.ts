import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DynamicSectionFormComponent } from './pages/dynamic-section-form/dynamic-section-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignupComponent } from './ui/pages/signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dynamic-section-form', component: DynamicSectionFormComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
