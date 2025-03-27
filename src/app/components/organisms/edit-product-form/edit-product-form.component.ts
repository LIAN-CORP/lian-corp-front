import { Component, input } from '@angular/core';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormFieldIncrementComponent } from '../../molecules/form-field-increment/form-field-increment.component';
import { SaveButtonComponent } from '../../atoms/save-button/save-button.component';
import { GetListProductResponse } from '../../../data/inventory/dtos/response/get.list.product.response';

@Component({
  selector: 'app-edit-product-form',
  standalone: true,
  imports: [
    FormFieldComponent,
    ReactiveFormsModule,
    FormFieldIncrementComponent,
    SaveButtonComponent,
  ],
  templateUrl: './edit-product-form.component.html',
  styleUrl: './edit-product-form.component.scss',
})
export class EditProductFormComponent {
  product = input.required<GetListProductResponse>();
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
  onSubmit() {
    console.log(this.editProductForm.value);
  }
}
