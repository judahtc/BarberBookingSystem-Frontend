import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { from } from 'rxjs';
import { FormGroup,FormBuilder,ReactiveFormsModule } from '@angular/forms'
import { AppointmentsService } from '../appointments.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  baseurl1 = 'http://localhost:8000/customers/login';
    //@ts-ignore
    form:FormGroup;

  constructor(private router:Router,
              private fb:FormBuilder,
              private appointmentsService:AppointmentsService
              ,private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.form =this.fb.group(
      {
        username:[''],
        email:[''],
        password:[''],
      }
    );

  

  }

  onSubmit(){
    this.appointmentsService.login(this.form.value).subscribe((res)=>{
      
      this.router.navigate(['/portal/appoints'])
      console.log(res)

    });
  }
  
  // onSubmit(): void{

  //     this.http.post('http://localhost:8000/customers/login',this.form.getRawValue(),{withCredentials:true}).subscribe(

  //       ()=>this.router.navigate(['/']));
      
  // }


  SignUp(){
    this.router.navigate(['/signup'])

  }


}
