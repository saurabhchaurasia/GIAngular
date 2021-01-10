import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import{Plansdts} from './../models/insuranceModels';

@Injectable({
  providedIn: 'root'
})
export class PlanServicesService {
  url="http://localhost/GeneralInsurance/api/Insurance/";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }
  addInsurance(INSURANCE:Plansdts):Observable<Plansdts>{
    return this.http.post<Plansdts>(this.url+"PostInsurance",INSURANCE,this.httpOptions);
  }
  getdata(id:number):Observable<any>{
    return this.http.get<any>(this.url+'getmotor/'+id);
  }
}
