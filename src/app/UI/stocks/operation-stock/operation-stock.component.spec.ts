import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationStockComponent } from './operation-stock.component';

describe('OperationStockComponent', () => {
  let component: OperationStockComponent;
  let fixture: ComponentFixture<OperationStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
