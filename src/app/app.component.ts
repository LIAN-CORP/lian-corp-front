import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDisplayComponent } from './components/molecules/product-display/product-display.component';
import { CardProductComponent } from './components/molecules/card-product/card-product.component';
import { GetListProductResponse } from './data/inventory/dtos/response/get.list.product.response';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductDisplayComponent, CardProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lian-corp-front';
  product: GetListProductResponse = {
    id: 1,
    name: 'Product 1',
    thumbnail:
      'https://colanta.vtexassets.com/arquivos/ids/157503/8212-1.png?v=638180372597300000',
    category: 'Description 1',
    price: 1000,
    quantity: 10,
  };
}
