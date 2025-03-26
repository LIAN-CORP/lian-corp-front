import { Component, input } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss',
})
export class DeleteButtonComponent {
  text = input.required<string>();
  type = input<string>();
}
