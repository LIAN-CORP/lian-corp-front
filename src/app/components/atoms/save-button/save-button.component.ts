import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [],
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.scss',
})
export class SaveButtonComponent {
  text = input.required<string>();
  type = input<string>();
}
