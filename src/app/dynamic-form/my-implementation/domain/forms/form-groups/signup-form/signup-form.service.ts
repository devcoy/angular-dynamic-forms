import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '../../controls/bases/control.base';

@Injectable({
  providedIn: 'root',
})
export class signupFormService {
  buildFormGroup(controls: ControlBase<string>[]) {
    const formGroup: any = {};

    controls.forEach((control) => {
      formGroup[control.key] = control.required
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });

    return new FormGroup(formGroup);
  }
}
