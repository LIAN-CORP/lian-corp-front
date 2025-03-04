import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgBgButtonComponent } from '../../atoms/svg-bg-button/svg-bg-button.component';

@Component({
  selector: 'app-invoice-display',
  standalone: true,
  imports: [SvgBgButtonComponent],
  templateUrl: './invoice-display.component.html',
  styleUrl: './invoice-display.component.scss',
})
export class InvoiceDisplayComponent {
  @Input() date!: string;
  @Input() invoice!: string;
  @Output() details = new EventEmitter<void>();
  onDetails() {
    this.details.emit();
  }
}
