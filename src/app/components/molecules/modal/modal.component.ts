import { Component, Input } from '@angular/core';
import { SvgButtonComponent } from '../../atoms/svg-button/svg-button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SvgButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title!: string;
}
