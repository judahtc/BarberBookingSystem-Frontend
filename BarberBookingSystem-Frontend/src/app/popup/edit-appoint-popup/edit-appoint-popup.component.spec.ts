import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppointPopupComponent } from './edit-appoint-popup.component';

describe('EditAppointPopupComponent', () => {
  let component: EditAppointPopupComponent;
  let fixture: ComponentFixture<EditAppointPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppointPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAppointPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
