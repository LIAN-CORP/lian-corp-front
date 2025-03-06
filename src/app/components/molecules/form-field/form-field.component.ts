import { Component, Input, input } from '@angular/core';
import { ErrorsDisplayComponent } from '../errors-display/errors-display.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [ErrorsDisplayComponent, ReactiveFormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
  label = input.required<string>();
  idInput = input.required<string>();
  type = input.required<string>();
  placeholder = input<string>();
  @Input({ required: true }) control!: FormControl;

  getMessageError(): string {
    const errors = this.control.errors;
    if (errors?.['required']) {
      return 'Este campo es requerido';
    } else if (errors?.['minlength']) {
      return `Debe tener al menos ${errors?.['minlength'].requiredLength} caracteres`;
    } else if (errors?.['maxlength']) {
      return `Debe tener como máximo ${errors?.['maxlength'].requiredLength} caracteres`;
    } else if (errors?.['email']) {
      return `Debe ser un correo electrónico válido`;
    } else if (errors?.['passwordMatch']) {
      return 'Las contraseñas no coinciden';
    } else if (errors?.['pattern']) {
      return 'Debe ser una URL válida';
    }

    return '';
  }
}
