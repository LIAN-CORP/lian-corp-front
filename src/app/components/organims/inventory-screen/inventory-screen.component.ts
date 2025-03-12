import { Component } from '@angular/core';
import { GetListProductResponse } from '../../../data/inventory/dtos/response/get.list.product.response';
import { CardProductComponent } from '../../molecules/card-product/card-product.component';

@Component({
  selector: 'app-inventory-screen',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './inventory-screen.component.html',
  styleUrl: './inventory-screen.component.scss',
})
export class InventoryScreenComponent {
  products: GetListProductResponse[] = [
    {
      id: 2,
      name: 'Product 2',
      thumbnail:
        'https://colanta.vtexassets.com/arquivos/ids/157503/8212-1.png?v=638180372597300000',
      category: 'Category 2',
      price: 1500,
      quantity: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      thumbnail:
        'https://colanta.vtexassets.com/arquivos/ids/157503/8212-1.png?v=638180372597300000',
      category: 'Category 3',
      price: 2000,
      quantity: 15,
    },
    {
      id: 4,
      name: 'Product 4',
      thumbnail:
        'https://colanta.vtexassets.com/arquivos/ids/157503/8212-1.png?v=638180372597300000',
      category: 'Category 4',
      price: 2500,
      quantity: 30,
    },
    {
      id: 5,
      name: 'Product 5',
      thumbnail:
        'https://colanta.vtexassets.com/arquivos/ids/157503/8212-1.png?v=638180372597300000',
      category: 'Category 5',
      price: 3000,
      quantity: 25,
    },
    {
      id: 6,
      name: 'Product 6',
      thumbnail:
        'https://colanta.vtexassets.com/arquivos/ids/157503/8212-1.png?v=638180372597300000',
      category: 'Category 6',
      price: 3500,
      quantity: 10,
    },
  ];
}
