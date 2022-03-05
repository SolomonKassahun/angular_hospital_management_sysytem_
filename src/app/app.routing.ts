import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { DoctorPageComponent } from "./doctor-page/doctor-page.component";
import { HomeComponent } from "./home/home.component";
import { LaboratoristPageComponent } from "./laboratorist-page/laboratorist-page.component";
import { LoginComponent } from "./login/login.component";
import { PatientPageComponent } from "./patient-page/patient-page.component";

export const routng=RouterModule.forRoot([
    
    {
        path:'home',
        component:HomeComponent,
        // outlet:'hospitalMain'
        
        
    },
    {
        path:'appointment',
        component:AppointmentComponent,
        // outlet:'hospitalMain'
    },
    {
        path:'login',
        component:LoginComponent,
        // outlet:'hospitalMain'
    },
    {
        path:'patient',
        component:PatientPageComponent,
        // outlet:'hospitalMain'
    },
    {
        path:'admin',
        component:AdminPageComponent,
        // outlet:'hospitalMain'
    },
    {
        path:'laboratorist',
        component:LaboratoristPageComponent,
        // outlet:'hospitalMain'
    },
    {
        path:'doctor',
        component:DoctorPageComponent,
        // outlet:'hospitalMain'
    },
    {
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
    }
    
    
])