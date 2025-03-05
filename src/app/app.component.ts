import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CancelButtonComponent } from './components/atoms/cancel-button/cancel-button.component';
import { DeleteButtonComponent } from './components/atoms/delete-button/delete-button.component';
import { SvgButtonComponent } from './components/atoms/svg-button/svg-button.component';
import { SaveButtonComponent } from './components/atoms/save-button/save-button.component';
import { CardDebtComponent } from './components/molecules/card-debt/card-debt.component';
import { CardProductComponent } from './components/molecules/card-product/card-product.component';
import { AmountDisplayComponent } from './components/molecules/amount-display/amount-display.component';
import { ProductDisplayComponent } from './components/molecules/product-display/product-display.component';
import { PaymentsDisplayComponent } from './components/molecules/payments-display/payments-display.component';
import { InvoiceDisplayComponent } from './components/molecules/invoice-display/invoice-display.component';
import { DebtDisplayComponent } from './components/molecules/debt-display/debt-display.component';
import { ModalComponent } from './components/molecules/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, AmountDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lian-corp-front';
  price = 1000;
  quantity = 2;
}
