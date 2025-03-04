import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgBgButtonComponent } from '../../atoms/svg-bg-button/svg-bg-button.component';

@Component({
  selector: 'app-payments-display',
  standalone: true,
  imports: [SvgBgButtonComponent],
  templateUrl: './payments-display.component.html',
  styleUrl: './payments-display.component.scss',
})
export class PaymentsDisplayComponent {
  @Input() payment!: string;
  @Input() paymentForm!: string;
  @Input() amount!: number;
  @Output() details = new EventEmitter<void>();

  onDetails() {
    this.details.emit();
  }
}
