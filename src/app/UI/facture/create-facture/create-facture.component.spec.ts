import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFactureComponent } from './create-facture.component';

describe('CreateFactureComponent', () => {
  let component: CreateFactureComponent;
  let fixture: ComponentFixture<CreateFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFactureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
