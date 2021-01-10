import { Component, OnInit } from '@angular/core';
import{Buydts} from './../models/motorModel';
import{Router} from '@angular/router';
import{FormsModule} from '@angular/forms';
import{BuyServicesService} from '../services/buy-services.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
MOTOR:Buydts={
  ManufactureYear:null,
  Model:null,
  Type:null,
  PurchaseDate:null,
  Regno:null,
  EngineNo:null,
  ChasisNo:null,
  UserId:null
};
  constructor(private buyservices:BuyServicesService,private Router:Router) { }
    AddMotor(){
      this.buyservices.addMotor(this.MOTOR).subscribe(()=>{
        alert("details added");
        
        this.Router.navigate(['/plan/'+this.MOTOR.ChasisNo]);  
      });
    }
    saveMotor(MOTOR:Buydts):void{
      this.MOTOR=MOTOR;
      this.AddMotor();
    }

  ngOnInit(): void {
  }

}
