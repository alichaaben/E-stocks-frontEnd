import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFacturesComponent } from './dashboard-factures.component';

describe('DashboardFacturesComponent', () => {
  let component: DashboardFacturesComponent;
  let fixture: ComponentFixture<DashboardFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardFacturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
