import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoachsComponent } from './list-coachs.component';

describe('ListCoachsComponent', () => {
  let component: ListCoachsComponent;
  let fixture: ComponentFixture<ListCoachsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCoachsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoachsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
