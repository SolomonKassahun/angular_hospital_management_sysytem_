import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }
  _url='';

  login(loginInfo:Login){
    let role = loginInfo.role;
    if (role == 1) {
      // Doctor
      this._url='http://127.0.0.1:5000/api/loginDoctor';

    } else if (role = 2) {
      // patient
      
      this._url='http://127.0.0.1:5000/api/loginPatient';
    } else if (role == 3) {
      // laboratorist
      this._url='http://127.0.0.1:5000/api/loginLaboratorist';
    } else {
      this._url='http://127.0.0.1:5000/api/loginAdmin';
      // admin
    }
   let userInfo={
      email:loginInfo.email,
      password:loginInfo.password
    }
    return this._http.post(<any>this._url,userInfo)
  }
}
