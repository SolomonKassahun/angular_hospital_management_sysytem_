import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {
  test="yared";
  
  userModel=new Patient("yared",
  "yared solomon",
  "yaredyaya@gmail.com",
  "yared",
  "A.A",
  "On",
  "nothing",
  "09123123"
  )

  constructor(private _apointmentService:AppointmentService) { 
    // this.userModel = this._apointmentService.getPatientDetail(2)
    // console.log("Patient Infoemation:" , this.userModel)

    // 

    this._apointmentService.getPatientDetail("y@gmail.com")
    // .subscribe(
    //   // data=>this.userModel=data,
    //   error=>console.error("Error!",error)
    //   )

  }


  ngOnInit(): void {
    this.userModel=history.state.data;
    console.log(history.state.data)
    console.log(this.userModel)
  }



}
