import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CancelButtonComponent } from "./components/cancel-button/cancel-button.component";
import { DeleteButtonComponent } from "./components/delete-button/delete-button.component";
import { SvgButtonComponent } from "./components/svg-button/svg-button.component";
import { SaveButtonComponent } from "./components/save-button/save-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CancelButtonComponent, DeleteButtonComponent, SvgButtonComponent, SaveButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lian-corp-front';
}
