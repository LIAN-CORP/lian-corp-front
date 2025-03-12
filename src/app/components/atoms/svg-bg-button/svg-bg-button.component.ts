import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-bg-button',
  standalone: true,
  imports: [],
  templateUrl: './svg-bg-button.component.html',
  styleUrl: './svg-bg-button.component.scss',
})
export class SvgBgButtonComponent {
  @Input() bgColor!: string;
}
