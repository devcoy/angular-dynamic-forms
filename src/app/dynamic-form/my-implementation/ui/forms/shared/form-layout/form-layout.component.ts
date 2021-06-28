import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../../../domain/forms/controls/bases/control.base';
import { FormGroupService } from '../../../../domain/forms/form-groups/form-group.service';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss'],
})
export class FormLayoutComponent implements OnInit {
  @Input() controls: ControlBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private _formGroupService: FormGroupService) {}

  ngOnInit() {
    this.form = this._formGroupService.buildFormGroup(
      this.controls as ControlBase<string>[]
    );
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
