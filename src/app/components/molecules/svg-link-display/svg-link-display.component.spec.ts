import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLinkDisplayComponent } from './svg-link-display.component';

describe('SvgLinkDisplayComponent', () => {
  let component: SvgLinkDisplayComponent;
  let fixture: ComponentFixture<SvgLinkDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgLinkDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgLinkDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
