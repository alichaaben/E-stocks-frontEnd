import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuggetComponent } from './list-bugget.component';

describe('ListBuggetComponent', () => {
  let component: ListBuggetComponent;
  let fixture: ComponentFixture<ListBuggetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBuggetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListBuggetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
