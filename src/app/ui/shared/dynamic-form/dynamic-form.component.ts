import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlnBase } from '../../../domain/forms/controls/bases/control.base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() control!: ControlnBase<any>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.control.key].valid;
  }
  constructor() {}

  ngOnInit(): void {}
}
