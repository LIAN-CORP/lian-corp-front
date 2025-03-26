import { Component } from '@angular/core';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormFieldIncrementComponent } from '../../molecules/form-field-increment/form-field-increment.component';

@Component({
  selector: 'app-edit-product-form',
  standalone: true,
  imports: [
    FormFieldComponent,
    ReactiveFormsModule,
    FormFieldIncrementComponent,
  ],
  templateUrl: './edit-product-form.component.html',
  styleUrl: './edit-product-form.component.scss',
})
export class EditProductFormComponent {
  editProductForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.editProductForm = this.fb.group({
      price: ['', Validators.required],
      quantity: [1, Validators.required],
    });
  }
  get priceControl(): FormControl {
    return this.editProductForm.get('price') as FormControl;
  }
  get quantityControl(): FormControl {
    return this.editProductForm.get('quantity') as FormControl;
  }
}
