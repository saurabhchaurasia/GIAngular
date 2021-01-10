import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import{Renewdts} from './../models/insuranceModel2';
import{Plansdts} from './../models/insuranceModels';
@Injectable({
  providedIn: 'root'
})
export class RenewServicesService {
  url="http://localhost/GeneralInsurance/api/Insurance/";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }
  getData(id:number):Observable<Renewdts[]>{
    return this.http.get<Renewdts[]>(this.url+"GetInsuranceDetails/"+id)
  }
  getData1(id:number):Observable<Plansdts>{
    return this.http.get<Plansdts>(this.url+"GetInsuranceDetails/"+id)
  }
  editData(id:number,INSURANCE:Plansdts):Observable<Plansdts>{
    return this.http.put<Plansdts>(this.url+"PutInsurance/"+id,INSURANCE,this.httpOptions);
  }
}
