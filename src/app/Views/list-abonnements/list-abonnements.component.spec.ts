import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbonnementsComponent } from './list-abonnements.component';

describe('ListAbonnementsComponent', () => {
  let component: ListAbonnementsComponent;
  let fixture: ComponentFixture<ListAbonnementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAbonnementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAbonnementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
