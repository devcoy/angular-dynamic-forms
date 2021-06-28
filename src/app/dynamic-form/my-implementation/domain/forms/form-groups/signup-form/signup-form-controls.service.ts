import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { ControlBase } from '../../controls/bases/control.base';
import { InputControl } from '../../controls/types/text-boxes/input.control';

@Injectable({
  providedIn: 'root',
})
export class SignupFormControlsService {
  getFormControls() {
    const signupFormControls: ControlBase<string>[] = [
      new InputControl({
        key: 'fullname',
        label: 'Nombre completo',
        type: 'text',
        required: true,
        level: 1,
        value: 'Jorge Cervantes',
      }),
      new InputControl({
        key: 'email',
        label: 'Correo electrónico',
        type: 'email',
        required: true,
        level: 2,
      }),
      new InputControl({
        key: 'password',
        label: 'Contraseña',
        type: 'password',
        required: true,
        level: 3,
      }),
    ];

    return of(signupFormControls.sort((a, b) => a.level - b.level));
  }
}
