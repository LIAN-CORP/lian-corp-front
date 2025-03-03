import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-products-data',
  standalone: true,
  imports: [],
  templateUrl: './show-products-data.component.html',
  styleUrl: './show-products-data.component.scss',
})
export class ShowProductsDataComponent {
  @Input() label!: string;
  @Input() data!: string;
}
