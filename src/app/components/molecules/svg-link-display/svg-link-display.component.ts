import { Component, input } from '@angular/core';

@Component({
  selector: 'app-svg-link-display',
  standalone: true,
  imports: [],
  templateUrl: './svg-link-display.component.html',
  styleUrl: './svg-link-display.component.scss',
})
export class SvgLinkDisplayComponent {
  label = input.required<string>();
  link = input.required<string>();
}
