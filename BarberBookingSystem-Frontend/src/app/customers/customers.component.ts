import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
user:any;
firstName:any;
  constructor(private appointmentsService:AppointmentsService) { }

  ngOnInit(): void {
    this.all()
  }


  all(){
    this.appointmentsService.getUser()
    .subscribe(user=>{
        this.user=user
        console.log(user)
        this.firstName=this.user.firstName;
    });
  }
}
