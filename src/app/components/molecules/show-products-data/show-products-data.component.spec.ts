import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsDataComponent } from './show-products-data.component';

describe('ShowProductsDataComponent', () => {
  let component: ShowProductsDataComponent;
  let fixture: ComponentFixture<ShowProductsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowProductsDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
