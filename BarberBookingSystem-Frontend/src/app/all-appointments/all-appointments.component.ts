import {  Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { appointmentsModel } from '../shared/appointmentsModel';
import { ActivatedRoute,Router } from '@angular/router'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EditAppointPopupComponent } from '../popup/edit-appoint-popup/edit-appoint-popup.component';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss']
})

export class AllAppointmentsComponent implements OnInit {
  AppointmentsModel:any;
  appointment:any;
  closeResult = '';
  res:any;
  barber:any;
  description:any;
  serviceType:any;
  appointDate:any;
  appointTime:any;
  barberId:any;
  custId:any;
  result:any;
  appointmentId:any;
  id:any;
  user:any;
  delResponse:any;
  a:any;
  b:any;
  title = 'Frontends';


  
  constructor(private appointmentService:AppointmentsService,
              private route:ActivatedRoute,
              private router:Router,
              private modalService:NgbModal,
              private fb:FormBuilder,
    ) { }
    public iid=this.route.snapshot.params['id']

  ngOnInit() {

    
    this.all()
    // this.appoints()
    this.customer()
    this.barbers()
    // this.delete()
    // this.close()
    // this.open()
    localStorage.setItem("myid", this.route.snapshot.params['id']);
    

    this.form=this.fb.group({
      serviceType: [''],
      description: [''],
      appointDate: [''],
      appointTime: [''],
      barberId: [''],
      custId:[''],
      amount: '200'
  

      })

      this.form1=this.fb.group({
        serviceType: [''],
        description: [''],
        appointDate: [''],
        appointTime: [''],
        barberId: [''],
        custId:[''],
        amount: '200'
    
  
        })

  }

      //@ts-ignore
      form:FormGroup;
      //@ts-ignore
      form1:FormGroup;

  all(){
    this.appointmentService.portal()
    .subscribe(appointment=>{
        this.appointment=appointment
  

    });

}

onSubmit(){
  this.appointmentService.AddAppoints(this.form.value).
  subscribe((result)=>{
    this.router.navigate(['/portal/appoints']);
    window.location.reload()
    this.result=result
    console.log(result)

  
}

)

}

update(){
  this.a=this.form.value
  this.b=this.form1.value
  this.appointmentService.updateAppoint(localStorage.getItem("myid"),this.form1.value).
  subscribe((result)=>{

    this.result=result
    console.log(result)


 

  
}

)

}

// appoints(){
//   this.appointmentService.appointment(localStorage.getItem("myid")).subscribe(res=>{
//     this.res=res;

//     // console.log(res);
//     // this.description=res.description;
//     // this.serviceType=res.serviceType;
//     // this.appointDate=res.appointDate;
//     // this.appointTime=res.appointTime;
//     this.custId=res.custId
//     this.appointmentId=res.appointmentId;

//     // this.router.navigate(['/portal/appoints']);
    


//   })  }

  customer(){
    this.appointmentService.getUser()
    .subscribe(user=>{
        this.user=user

        this.custId=this.user.custId;
        
    });
  }

  barbers(){
    this.appointmentService.barbers().subscribe(
      barber=>{
        this.barber=barber
        this.barberId=barber.barberId
        // console.log(this.barber)



 
        
    })}

    close(){
      this.router.navigate(['/portal/appoints']);
    }



delete(){
  this.appointmentService.delete(localStorage.getItem("myid")).subscribe(res=>{
    this.delResponse=res
    localStorage.clear();
    this.router.navigate(['/portal/appoints']);
  }
  )
}

    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg'}).result.then((result) => {
        
        
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       
      });
    }

    open1(delete1:any,appointments:any) {
      
      console.log(appointments)
      this.modalService.open(delete1, {ariaLabelledBy: 'modal-basic-title',size: 'sm'}).result.then((result) => {
        
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       
      });

      document.getElementById('myid')!.setAttribute('value',appointments.appointmentId)
    }
    

    open2(updateModal:any,appointments:any) {
      
      console.log(appointments)
      this.modalService.open(updateModal, {ariaLabelledBy: 'modal-basic-title',size: 'lg'}).result.then((result) => {
        
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       
      });

      document.getElementById('serviceType')!.setAttribute('value',appointments.serviceType);
      document.getElementById('description')!.setAttribute('value',appointments.description);
      document.getElementById('appointDate')!.setAttribute('value',appointments.appointDate);
      document.getElementById('appointTime')!.setAttribute('value',appointments.appointTime);
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
        
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

}
