import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  standalone: true,
  imports: [],
  templateUrl: './cancel-button.component.html',
  styleUrl: './cancel-button.component.scss',
})
export class CancelButtonComponent {
  text = input.required<string>();
  type = input<string>();
}
