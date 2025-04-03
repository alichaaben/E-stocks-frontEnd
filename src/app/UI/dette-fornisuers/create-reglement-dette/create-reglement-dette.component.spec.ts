import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReglementDetteComponent } from './create-reglement-dette.component';

describe('CreateReglementDetteComponent', () => {
  let component: CreateReglementDetteComponent;
  let fixture: ComponentFixture<CreateReglementDetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateReglementDetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateReglementDetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
