import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { DeleleAppointsComponent } from './delele-appoints/delele-appoints.component';
import { EditAppointsComponent } from './edit-appoints/edit-appoints.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { EditAppointPopupComponent } from './popup/edit-appoint-popup/edit-appoint-popup.component';
import { PortalComponent } from './portal/portal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateAppointsComponent } from './update-appoints/update-appoints.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'portal',component:PortalComponent, children: [
      {path:'appoints',component:AllAppointmentsComponent},
      {path:'apps/:id',component:AllAppointmentsComponent},
      {path:'add-appoint',component:AddAppointmentComponent},
      {path:'deleteAppoint/:id',component:DeleleAppointsComponent},
      {path:'editAppoint/:id',component:EditAppointsComponent},
      {path:'updateAppoint/:id',component:UpdateAppointsComponent},
      {path:'editAppoints/:id',component:EditAppointPopupComponent}]},
  {path:'homepage',component:HomepageComponent},
  {path:'customer',component:CustomersComponent},
  {path:'sidebar',component:SidebarComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents=[
  AppComponent,
  LoginComponent,
  AllAppointmentsComponent,
  SignupComponent,
  HomepageComponent,
  PortalComponent,
  CustomersComponent,
  AddAppointmentComponent,
  DeleleAppointsComponent,
  EditAppointsComponent,
  UpdateAppointsComponent,
  EditAppointPopupComponent
]