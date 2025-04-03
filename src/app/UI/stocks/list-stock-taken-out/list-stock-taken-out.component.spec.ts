import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStockTakenOutComponent } from './list-stock-taken-out.component';

describe('ListStockTakenOutComponent', () => {
  let component: ListStockTakenOutComponent;
  let fixture: ComponentFixture<ListStockTakenOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStockTakenOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListStockTakenOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
