import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{RenewServicesService} from '../services/renew-services.service';
import{Renewdts} from './../models/insuranceModel2';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {
  InsuranceDataList:Renewdts[];

  constructor(private Renewservice:RenewServicesService,private router:ActivatedRoute) { }
GetInsuranceData(id:number){
  this.Renewservice.getData(id).subscribe((data:Renewdts[])=>{
    this.InsuranceDataList=data;
  })
}
  ngOnInit(): void {
    const id= 8
this.GetInsuranceData(id)
  }

}
