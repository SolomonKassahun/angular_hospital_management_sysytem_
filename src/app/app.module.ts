import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routng } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentService } from './appointment.service';
import { LoginComponent } from './login/login.component';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { LaboratoristPageComponent } from './laboratorist-page/laboratorist-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AppointmentComponent,
    LoginComponent,
    PatientPageComponent,
    AdminPageComponent,
    DoctorPageComponent,
    LaboratoristPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    routng,

  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
