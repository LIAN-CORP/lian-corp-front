import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amount-display',
  standalone: true,
  imports: [],
  templateUrl: './amount-display.component.html',
  styleUrl: './amount-display.component.scss',
})
export class AmountDisplayComponent {
  @Input() label!: string;
  @Input() quantity!: number;
  @Input() price!: number;
}
