import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  // petient:Patient;
  constructor(private _http:HttpClient) { }
  _url='http://127.0.0.1:5000/api/Patients';
  _url2='http://127.0.0.1:5000/api/Patients/';

   appoint(pst:Patient){

  return this._http.post(<any>this._url,pst)

  }

   getPatientDetail(email:string){
    
    
    let patients: Patient[] = [];

    // let patient:Patient

    let patient:Patient


    this._http.get(this._url).forEach(pt=>patients.push(pt as Patient))

    console.log(patients)

    //  for(let i=0;i<patients.length;i++){
    //   if(patients[i].email==email){
        
    //     patient=patients[i]
    //   }
    // }




     patient=patients.map(pt=>pt.email=email;
console.log("patient to be displayed",patient)
    return patient
    
  }
      
}