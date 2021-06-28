import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../../domain/forms/controls/bases/control.base';
import { signupFormService } from '../../../domain/forms/form-groups/signup-form/signup-form.service';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss'],
})
export class FormLayoutComponent implements OnInit {
  @Input() controls: ControlBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private ctrls: signupFormService) {}

  ngOnInit() {
    // console.warn('[controls to render]', this.controls);
    this.form = this.ctrls.buildFormGroup(
      this.controls as ControlBase<string>[]
    );
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
