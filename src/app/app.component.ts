import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryScreenComponent } from './components/organisms/inventory-screen/inventory-screen.component';
import { NavBarComponent } from './components/organisms/nav-bar/nav-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InventoryScreenComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lian-corp-front';
}
