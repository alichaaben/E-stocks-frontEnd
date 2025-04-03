import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReglementDetteComponent } from './list-reglement-dette.component';

describe('ListReglementDetteComponent', () => {
  let component: ListReglementDetteComponent;
  let fixture: ComponentFixture<ListReglementDetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListReglementDetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListReglementDetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
