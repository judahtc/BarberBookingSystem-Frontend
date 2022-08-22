import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.Scss']
})
 export class SignupComponent implements OnInit {
 //@ts-ignore
 form:FormGroup;

  constructor(
              private appointmentsService:AppointmentsService,
              private router:Router,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      password: [''],
      phoneNumber: [''],
      email: [''],
      age: [''],
      Address: ['']
  

      })
  }
      onSubmit(){
        this.appointmentsService.upload(this.form.value).
        subscribe((result)=>{
        console.log(this.form.value)
        this.router.navigate(['/login'])
        
  }
  
  )

}

}
