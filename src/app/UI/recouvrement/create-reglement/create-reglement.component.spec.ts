import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReglementComponent } from './create-reglement.component';

describe('CreateReglementComponent', () => {
  let component: CreateReglementComponent;
  let fixture: ComponentFixture<CreateReglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateReglementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
