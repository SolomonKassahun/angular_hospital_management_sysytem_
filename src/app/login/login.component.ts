import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo = new Login("yared@gmail.com", "yared", 1)

  selectionValue: string = ""
  password: string = ""
  email: string = ""
  constructor(private router: Router,private loginService:LoginService) {

  }

  ngOnInit(): void {
  }

  login() {

    // let role = this.loginInfo.role;
    // if (role == 1) {
    //   // Doctor
    // } else if (role = 2) {
    //   // patient
    // } else if (role == 3) {
    //   // laboratorist
    // } else {
    //   // admin
    // }

    this.loginService.login(this.loginInfo)
    .subscribe(
      data=>{
        let role = this.loginInfo.role;
    if (role == 1) {
      // Doctor
    } else if (role = 2) {
      // patient
      console.log("Data",data)
      history.pushState({data: data}, '', '');
      this.router.navigateByUrl('/patient',{ state: data});
    } else if (role == 3) {
      // laboratorist
    } else {
      // admin
    }

      },
      error=>alert("Incorrect Email and Password!")
      )
    
    // navigate to different pages.
    // alert(this.loginInfo.email)


    


  }
}
