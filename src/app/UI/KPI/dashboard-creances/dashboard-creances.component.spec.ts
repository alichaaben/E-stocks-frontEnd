import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreancesComponent } from './dashboard-creances.component';

describe('DashboardCreancesComponent', () => {
  let component: DashboardCreancesComponent;
  let fixture: ComponentFixture<DashboardCreancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCreancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCreancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
