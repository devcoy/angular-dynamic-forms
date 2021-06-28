import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dynamic-form', pathMatch: 'full' },
  { path: 'dynamic-form', component: DynamicFormComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
