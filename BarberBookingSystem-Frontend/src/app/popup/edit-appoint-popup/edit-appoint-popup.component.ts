import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppointmentsService } from 'src/app/appointments.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-appoint-popup',
  templateUrl: './edit-appoint-popup.component.html',
  styleUrls: ['./edit-appoint-popup.component.scss']
})
export class EditAppointPopupComponent implements OnInit {
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
    private fb:FormBuilder,
    private ngbModuleService:NgbActiveModal) { }
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
