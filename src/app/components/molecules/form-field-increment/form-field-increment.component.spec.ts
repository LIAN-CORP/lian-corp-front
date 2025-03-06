import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldIncrementComponent } from './form-field-increment.component';

describe('FormFieldIncrementComponent', () => {
  let component: FormFieldIncrementComponent;
  let fixture: ComponentFixture<FormFieldIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldIncrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
