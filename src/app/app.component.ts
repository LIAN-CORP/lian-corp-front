import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmountDisplayComponent } from './components/molecules/amount-display/amount-display.component';
import { ModalComponent } from './components/molecules/modal/modal.component';
import { FormFieldComponent } from './components/molecules/form-field/form-field.component';
import { FormFieldIncrementComponent } from './components/molecules/form-field-increment/form-field-increment.component';
import { ErrorsDisplayComponent } from './components/molecules/errors-display/errors-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ModalComponent,
    AmountDisplayComponent,
    FormFieldComponent,
    FormFieldIncrementComponent,
    ErrorsDisplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lian-corp-front';
  price = 1000;
  quantity = 2;
}
