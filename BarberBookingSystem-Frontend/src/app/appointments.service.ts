import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  baseurl = 'http://localhost:8000/appointments/appoint';
  baseurl1 = 'http://localhost:8000/customers/login';
  URL6 = 'http://localhost:8000/customers/appointments';
  URL7 ='http://localhost:8000/customers/customer';
  URL8='http://localhost:8000/customers/customers'
  URL9='http://localhost:8000/customers/barbers'
  URL10='http://localhost:8000/appointments/appoint/'
  constructor(private http: HttpClient) { }

  GetAppointments(){
    return this.http.get(this.baseurl)
  }

  login(data:any){
    return this.http.post<any>(this.baseurl1, data,{withCredentials:true});
}

portal(){
  return this.http.get(this.URL6,
    {withCredentials:true})
}

getUser(){
  return this.http.get(this.URL7,
    {withCredentials:true})
}

upload(data:any) {
  return this.http.post<any>(this.URL8, data);
}

AddAppoints(data:any) {
  return this.http.post<any>(this.URL6, data,
    {withCredentials:true});
}

barbers(){
  return this.http.get<any>(this.URL9)

}


delete(id:any){
  return this.http.delete<any>(this.URL10+id)

}


appointment(id:any){
  return this.http.get<any>(this.URL10+id)

}

updateAppoint(id:any,body:any){
  return this.http.put<any>(this.URL10+id,body)

}

}
