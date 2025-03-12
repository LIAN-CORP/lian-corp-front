import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgBgButtonComponent } from '../../atoms/svg-bg-button/svg-bg-button.component';

@Component({
  selector: 'app-debt-display',
  standalone: true,
  imports: [SvgBgButtonComponent],
  templateUrl: './debt-display.component.html',
  styleUrl: './debt-display.component.scss',
})
export class DebtDisplayComponent {
  @Input() date!: string;
  @Input() bill!: string;
  @Input() amount!: number;
  @Output() details = new EventEmitter<void>();
  onDetails() {
    this.details.emit();
  }
}
