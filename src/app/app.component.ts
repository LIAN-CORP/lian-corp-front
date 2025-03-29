import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryScreenComponent } from './components/organisms/inventory-screen/inventory-screen.component';
import { NavBarComponent } from './components/organisms/nav-bar/nav-bar.component';
import { EditProductFormComponent } from './components/organisms/edit-product-form/edit-product-form.component';
import { PaginationComponent } from './components/molecules/pagination/pagination.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InventoryScreenComponent,
    NavBarComponent,
    EditProductFormComponent,
    PaginationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lian-corp-front';
  product = {
    id: 2,
    name: 'Product 2',
    thumbnail:
      'https://colanta.vtexassets.com/arquivos/ids/157503/8212-1.png?v=638180372597300000',
    category: 'Category 2',
    price: 1500,
    quantity: 20,
  };
}
