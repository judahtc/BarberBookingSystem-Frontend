import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';

import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-delele-appoints',
  templateUrl: './delele-appoints.component.html',
  styleUrls: ['./delele-appoints.component.scss']
})
export class DeleleAppointsComponent implements OnInit {

  constructor(private appointmentService:AppointmentsService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.delete()
  }

  
delete(){
  this.appointmentService.delete(this.route.snapshot.params['id']).subscribe(res=>{

    console.log(this.route.snapshot.params['id'])
    return this.router.navigate(['/portal/appoints']);
  }
  )
}

}
