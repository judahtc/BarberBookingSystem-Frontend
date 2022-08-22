import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {
  user:any;
  custId:any;
  barber:any;
  result:any;
  barberId:any;
  


  constructor(private appointmentsService:AppointmentsService,
              private fb:FormBuilder,
              private router:Router
    
    ) { }
//@ts-ignore
 form:FormGroup;
 
  ngOnInit(): void {
    this.all()
    this.barbers()

    
    this.form=this.fb.group({
      serviceType: [''],
      description: [''],
      appointDate: [''],
      appointTime: [''],
      barberId: [''],
      custId:[''],
      amount: '200'
  

      })
  }

  onSubmit(){
    this.appointmentsService.AddAppoints(this.form.value).
    subscribe((result)=>{
    this.result=result
    console.log(result)
    console.log(this.form.value)
    this.router.navigate(['/portal/appoints'])
    
}

)

}

  all(){
    this.appointmentsService.getUser()
    .subscribe(user=>{
        this.user=user

        this.custId=this.user.custId;
        
    });
  }

  barbers(){
    this.appointmentsService.barbers().subscribe(
      barber=>{
        this.barber=barber
        this.barberId=barber.barberId
        console.log(this.barber)



 
        
    }
    )
  };

  
  

}
