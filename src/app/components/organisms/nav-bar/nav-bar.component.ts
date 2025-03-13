import { Component } from '@angular/core';
import { SvgButtonComponent } from '../../atoms/svg-button/svg-button.component';
import { CommonModule } from '@angular/common';
import { SvgBgButtonComponent } from '../../atoms/svg-bg-button/svg-bg-button.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    SvgButtonComponent,
    CommonModule,
    SvgBgButtonComponent,
    MenuComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isMenuVisible = false;

  onOpenMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
