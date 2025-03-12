import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtDisplayComponent } from './debt-display.component';

describe('DebtDisplayComponent', () => {
  let component: DebtDisplayComponent;
  let fixture: ComponentFixture<DebtDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
