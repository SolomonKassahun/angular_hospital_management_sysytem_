import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

 
  userModel=new Patient("yared",
  "yared solomon",
  "yaredyaya@gmail.com",
  "yared",
  "A.A",
  "On",
  "nothing",
  "09123123"
  )

  constructor(private _appointmentService:AppointmentService) { }

  ngOnInit(): void {

  }

  
  onSubmit(){
    this._appointmentService.appoint(this.userModel)
    .subscribe(
      data=>alert("Thank You For Choosing Abc Hospital Your appointment request sent successfully Please check your account we will send you appointment date with in 24 hours "),
      error=>console.error("Error!",error)
      )
    
  }

}
