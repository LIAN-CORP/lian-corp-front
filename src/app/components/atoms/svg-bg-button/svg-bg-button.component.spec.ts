import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBgButtonComponent } from './svg-bg-button.component';

describe('SvgBgButtonComponent', () => {
  let component: SvgBgButtonComponent;
  let fixture: ComponentFixture<SvgBgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgBgButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgBgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
