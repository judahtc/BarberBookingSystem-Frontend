import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointsComponent } from './update-appoints.component';

describe('UpdateAppointsComponent', () => {
  let component: UpdateAppointsComponent;
  let fixture: ComponentFixture<UpdateAppointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAppointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
