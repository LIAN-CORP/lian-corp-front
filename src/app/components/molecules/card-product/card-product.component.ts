import { Component, input, output } from '@angular/core';
import { ShowProductsDataComponent } from '../show-products-data/show-products-data.component';
import { SvgBgButtonComponent } from '../../atoms/svg-bg-button/svg-bg-button.component';
import { GetListProductResponse } from '../../../data/inventory/dtos/response/get.list.product.response';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [ShowProductsDataComponent, SvgBgButtonComponent],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent {
  product = input<GetListProductResponse>();

  deleteProduct = output<void>();
  editProduct = output<void>();

  onDelete() {
    this.deleteProduct.emit();
  }
  onEdit() {
    this.editProduct.emit();
  }
}
