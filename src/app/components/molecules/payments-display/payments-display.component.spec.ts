import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsDisplayComponent } from './payments-display.component';

describe('PaymentsDisplayComponent', () => {
  let component: PaymentsDisplayComponent;
  let fixture: ComponentFixture<PaymentsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
