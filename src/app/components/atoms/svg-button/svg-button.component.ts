import { Component, HostBinding, input, Input } from '@angular/core';

@Component({
  selector: 'app-svg-button',
  standalone: true,
  imports: [],
  templateUrl: './svg-button.component.html',
  styleUrl: './svg-button.component.scss',
})
export class SvgButtonComponent {
  type = input<string>('button');
}
