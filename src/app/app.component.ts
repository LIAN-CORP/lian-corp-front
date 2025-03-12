import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryScreenComponent } from './components/organims/inventory-screen/inventory-screen.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InventoryScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lian-corp-front';
}
