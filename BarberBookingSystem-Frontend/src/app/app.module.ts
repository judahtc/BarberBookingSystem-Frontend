import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentsService } from './appointments.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PortalComponent } from './portal/portal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { DeleleAppointsComponent } from './delele-appoints/delele-appoints.component';
import { UpdateAppointsComponent } from './update-appoints/update-appoints.component';
import { EditAppointsComponent } from './edit-appoints/edit-appoints.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditAppointPopupComponent } from './popup/edit-appoint-popup/edit-appoint-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    AllAppointmentsComponent,
    SignupComponent,
    HomepageComponent,
    PortalComponent,
    SidebarComponent,
    AddAppointmentComponent,
    DeleleAppointsComponent,
    UpdateAppointsComponent,
    EditAppointsComponent,
    EditAppointPopupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
