import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlBase } from '../../../domain/forms/controls/bases/control.base';
import { SignupFormControlsService } from '../../../domain/forms/form-groups/signup-form/signup-form-controls.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  controls$: Observable<ControlBase<any>[]>;

  constructor(_signupFormControlsService: SignupFormControlsService) {
    this.controls$ = _signupFormControlsService.getFormControls();
  }
}
