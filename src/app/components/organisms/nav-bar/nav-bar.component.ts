import { Component } from '@angular/core';
import { SvgButtonComponent } from '../../atoms/svg-button/svg-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SvgButtonComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isMenuVisible = false;

  onOpenMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    console.log('Menu is visible');
  }
}
