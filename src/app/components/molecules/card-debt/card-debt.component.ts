import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgButtonComponent } from '../../atoms/svg-button/svg-button.component';
import { SvgBgButtonComponent } from '../../atoms/svg-bg-button/svg-bg-button.component';

@Component({
  selector: 'app-card-debt',
  standalone: true,
  imports: [SvgBgButtonComponent],
  templateUrl: './card-debt.component.html',
  styleUrl: './card-debt.component.scss',
})
export class CardDebtComponent {
  @Input() client!: string;
  @Input() debt!: string;
  @Output() details = new EventEmitter<void>();
  showDetails() {
    this.details.emit();
  }
}
