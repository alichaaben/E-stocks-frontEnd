import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoSystemComponent } from './ro-system.component';

describe('RoSystemComponent', () => {
  let component: RoSystemComponent;
  let fixture: ComponentFixture<RoSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
