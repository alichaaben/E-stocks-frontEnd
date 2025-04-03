import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStocksComponent } from './dashboard-stocks.component';

describe('DashboardStocksComponent', () => {
  let component: DashboardStocksComponent;
  let fixture: ComponentFixture<DashboardStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardStocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
