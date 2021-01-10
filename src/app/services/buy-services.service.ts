import { Injectable, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import{Buydts} from './../models/motorModel';
@Injectable({
  providedIn: 'root'
})
export class BuyServicesService  {
  url="http://localhost/GeneralInsurance/api/Insurance/";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }
  addMotor(MOTOR:Buydts):Observable<Buydts>{
    return this.http.post<Buydts>(this.url+"PostMotor",MOTOR,this.httpOptions);
  }
  getdata(id:number):Observable<any>{
    return this.http.get<any>(this.url+'getMotorId/'+id);
  }
}
