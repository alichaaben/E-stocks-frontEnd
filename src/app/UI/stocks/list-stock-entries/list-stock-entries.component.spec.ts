import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStockEntriesComponent } from './list-stock-entries.component';

describe('ListStockEntriesComponent', () => {
  let component: ListStockEntriesComponent;
  let fixture: ComponentFixture<ListStockEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStockEntriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListStockEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
