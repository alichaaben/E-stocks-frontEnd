import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDettesComponent } from './dashboard-dettes.component';

describe('DashboardDettesComponent', () => {
  let component: DashboardDettesComponent;
  let fixture: ComponentFixture<DashboardDettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDettesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardDettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
