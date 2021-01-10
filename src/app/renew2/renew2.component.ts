import { Component, OnInit } from '@angular/core';
import{RenewServicesService} from '../services/renew-services.service';
import{Plansdts} from './../models/insuranceModels';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-renew2',
  templateUrl: './renew2.component.html',
  styleUrls: ['./renew2.component.css']
})
export class Renew2Component implements OnInit {
  INSURANCE:Plansdts;
id:number;

  constructor(private Renewservice:RenewServicesService,private router:ActivatedRoute,private rout:Router) { }
  getData(id:number){
    this.Renewservice.getData1(id).subscribe((data:Plansdts) => {
      this.INSURANCE=data;
    })
  }
  EditInsurance(){
    this.Renewservice.editData(this.id,this.INSURANCE).subscribe(()=>{
alert("Your Insurance is Renewed");
this.rout.navigate(['/renew']);
    })
  }
  SaveInsurance(INSURANCE:Plansdts):void{
    this.INSURANCE=INSURANCE;
    console.log(this.INSURANCE.Plans);
    if(this.INSURANCE.Duration=='1'){
      this.INSURANCE.Amount=1000;
    }
    else if (this.INSURANCE.Duration=='2') {
      this.INSURANCE.Amount=2000;
    } else {
      this.INSURANCE.Amount=3000;
    }
    this.EditInsurance();
  }

  ngOnInit(): void {
    const id=+this.router.snapshot.paramMap.get('id'); 
    this.id=id;
    this.getData(id);
  }

}
