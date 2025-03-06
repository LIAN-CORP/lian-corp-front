import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors-display',
  standalone: true,
  imports: [],
  templateUrl: './errors-display.component.html',
  styleUrl: './errors-display.component.scss',
})
export class ErrorsDisplayComponent {
  @Input() errors!: string;
}
