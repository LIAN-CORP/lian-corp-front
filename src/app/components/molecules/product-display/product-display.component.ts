import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.scss',
})
export class ProductDisplayComponent {
  @Input() product!: string;
  @Input() quantity!: number;
  @Input() price!: number;
}
