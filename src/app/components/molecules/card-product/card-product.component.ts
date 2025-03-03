import { Component, EventEmitter, Output } from '@angular/core';
import { SvgButtonComponent } from '../../atoms/svg-button/svg-button.component';
import { ShowProductsDataComponent } from '../show-products-data/show-products-data.component';
import { SvgBgButtonComponent } from '../../atoms/svg-bg-button/svg-bg-button.component';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [ShowProductsDataComponent, SvgBgButtonComponent],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent {
  @Output() deleteProduct = new EventEmitter<void>();
  @Output() editProduct = new EventEmitter<void>();
  onDelete() {
    this.deleteProduct.emit();
    console.log('delete');
  }
  onEdit() {
    this.editProduct.emit();
    console.log('edit');
  }
}
