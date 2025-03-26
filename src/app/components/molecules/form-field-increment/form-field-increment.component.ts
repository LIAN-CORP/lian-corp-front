import { Component, Input, input, OnInit } from '@angular/core';
import { SvgButtonComponent } from '../../atoms/svg-button/svg-button.component';
import { ErrorsDisplayComponent } from '../errors-display/errors-display.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field-increment',
  standalone: true,
  imports: [SvgButtonComponent, ErrorsDisplayComponent, ReactiveFormsModule],
  templateUrl: './form-field-increment.component.html',
  styleUrl: './form-field-increment.component.scss',
})
export class FormFieldIncrementComponent implements OnInit {
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) min!: number;
  @Input({ required: true }) max!: number;
  inputId = input.required<string>();
  label = input.required<string>();
  ngOnInit(): void {}
  increment() {
    if (this.control.value < this.max && this.control.value >= this.min) {
      this.control.setValue(Number(this.control.value) + 1);
    } else {
      this.control.setValue(this.max);
    }
  }
  decrement() {
    if (this.control.value > this.min && this.control.value <= this.max) {
      this.control.setValue(Number(this.control.value) - 1);
    } else {
      this.control.setValue(this.min);
    }
  }
  getErrorMessages(): string {
    const errors = this.control.errors;
    if (errors?.['required']) {
      return 'Este campo es requerido';
    }
    return '';
  }
}
