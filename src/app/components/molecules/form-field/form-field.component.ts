import { Component, Input } from '@angular/core';
import { ErrorsDisplayComponent } from '../errors-display/errors-display.component';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [ErrorsDisplayComponent],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
  @Input() label!: string;
  @Input() idInput!: string;
  @Input() type!: string;
  @Input() placeholder: string = '';
  click = false;
}
