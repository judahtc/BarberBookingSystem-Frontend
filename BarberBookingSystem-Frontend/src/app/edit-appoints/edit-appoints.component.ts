import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';

import { ActivatedRoute,Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-appoints',
  templateUrl: './edit-appoints.component.html',
  styleUrls: ['./edit-appoints.component.scss']
})
export class EditAppointsComponent implements OnInit {
  res:any;
  barber:any;
  description:any;
  serviceType:any;
  appointDate:any;
  appointTime:any;
  barberId:any;
  customerId:any;
  result:any;

  constructor(private appointments:AppointmentsService,    
    private route:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder) { }
    //@ts-ignore
 form:FormGroup;

  ngOnInit(): void {
    this.appoints()
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
    this.appointments.updateAppoint(this.route.snapshot.params['id'],this.form.value).
    subscribe((result)=>{
    this.result=result
    console.log(result)
    console.log(this.form.value)
    this.router.navigate(['/portal/appoints'])
    
}

)

}

  appoints(){
    this.appointments.appointment(this.route.snapshot.params['id']).subscribe(res=>{
      this.res=res
      this.description=res.description
      this.serviceType=res.serviceType
      this.appointDate=res.appointDate
      this.appointTime=res.appointTime
      this.customerId=res.custId
      

      console.log()
    })  }

    barbers(){
      this.appointments.barbers().subscribe(
        barber=>{
          this.barber=barber
          this.barberId=barber.barberId
          console.log(this.barber)
  
  
  
   
          
      })}
}
