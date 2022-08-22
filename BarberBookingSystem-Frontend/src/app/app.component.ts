import { Component } from '@angular/core';
import { AppointmentsService } from './appointments.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  appointment:any;
  title = 'Frontends';
  constructor() { }



}
