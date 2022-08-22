import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleleAppointsComponent } from './delele-appoints.component';

describe('DeleleAppointsComponent', () => {
  let component: DeleleAppointsComponent;
  let fixture: ComponentFixture<DeleleAppointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleleAppointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleleAppointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
