import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreancesComponent } from './list-creances.component';

describe('ListCreancesComponent', () => {
  let component: ListCreancesComponent;
  let fixture: ComponentFixture<ListCreancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCreancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCreancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
