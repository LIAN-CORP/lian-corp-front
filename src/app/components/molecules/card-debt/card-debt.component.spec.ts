import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDebtComponent } from './card-debt.component';

describe('CardDebtComponent', () => {
  let component: CardDebtComponent;
  let fixture: ComponentFixture<CardDebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDebtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
