import { Component, OnInit } from '@angular/core';
import { updateDecorator } from 'typescript';
import { AllAppointmentsComponent } from '../all-appointments/all-appointments.component';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
user:any;
  constructor(private appointmentsService:AppointmentsService) { }

  ngOnInit(): void {
    this.all()
  }
  
  all(){
    this.appointmentsService.portal()
    .subscribe(user=>{
        this.user=user


    });
  }

  

}
