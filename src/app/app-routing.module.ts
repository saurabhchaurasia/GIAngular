import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { BuyComponent } from './buy/buy.component';
import { ClaimComponent } from './claim/claim.component';
import { EstimateComponent } from './estimate/estimate.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RenewComponent } from './renew/renew.component';
import { ResetComponent } from './reset/reset.component';
import { TicketComponent } from './ticket/ticket.component';
import { TranscationsComponent } from './transcations/transcations.component';

const routes: Routes = [
  {path:'login', component:AuthorizeComponent},
  {path:'register', component:RegisterComponent},
  {path:'resetPasswords', component:ResetComponent},
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent},
  {path:'profile', component:ProfileComponent},
  {path:'payment', component:PaymentComponent},
  {path:'buy', component:BuyComponent},
  {path:'renew',component:RenewComponent},
  {path:'transactions',component:TranscationsComponent},
  {path:'help',component:HelpComponent},
  {path:'estimate',component:EstimateComponent},
  {path:'claim', component:ClaimComponent },
  {path:'aboutus',component:AboutUsComponent},
  {path:'ticket',component:TicketComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
