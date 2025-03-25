import { Component, Input, input, output } from '@angular/core';
import { SvgBgButtonComponent } from '../../atoms/svg-bg-button/svg-bg-button.component';
import { SvgLinkDisplayComponent } from '../../molecules/svg-link-display/svg-link-display.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SvgBgButtonComponent, SvgLinkDisplayComponent, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() showMenu: boolean = false;
  closeMenu = output<void>();
  logout = output<void>();

  onCloseMenu() {
    this.closeMenu.emit();
  }

  onLogout() {
    this.logout.emit();
  }
}
