import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  cvForm: FormGroup;

  /**
   * Función get para conseguir el arreglo y así no hacernos mil bolas a la hora de manipularlo.
   */
  get workExperience(): FormArray {
    return this.cvForm.get('workExperience') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildcvForm();
    // Agrega los 3 campos la primera vez
    this.addWorkExperience();
  }

  buildcvForm() {
    this.cvForm = this.formBuilder.group({
      fullname: new FormControl(''),
      jobTitle: new FormControl(''),
      /**
       * Un FormArray es un arreglo de FormControl. Se comporta muy parecido a un arreglo normal
       * y tiene ciertos métodos propios que hace muy sencillo agregar y quitar elementos del mismo.
       */
      workExperience: this.formBuilder.array([]),
    });
  }

  /**
   * Cada vez que llamemos a addWorkExperience() vamos a generar un FormGroup con 3 campos:
   * company, jobTitle y description. Ya que esté creado, se va a añadir al arreglo de workExperience.
   */
  addWorkExperience() {
    const job = this.formBuilder.group({
      company: new FormControl(''),
      jobTitle: new FormControl(''),
      description: new FormControl(''),
    });
    this.workExperience.push(job);
  }

  removeWorkExperience(index: number) {
    this.workExperience.removeAt(index);
  }

  saveCv() {
    console.warn('[cv form]', this.cvForm.value);
  }
}
