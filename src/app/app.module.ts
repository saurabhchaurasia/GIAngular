import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { ResetComponent } from './reset/reset.component';
import { ApiService } from './services/api.service';
import { AuthenticateService } from './services/authenticate.service';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TranscationsComponent } from './transcations/transcations.component';
import { BuyComponent } from './buy/buy.component';
import { RenewComponent } from './renew/renew.component';
import { EstimateComponent } from './estimate/estimate.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { ClaimComponent } from './claim/claim.component';
import {FormsModule} from '@angular/forms';
import { PlanComponent } from './plan/plan.component';
import { Renew2Component } from './renew2/renew2.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorizeComponent,
    ResetComponent,
    HomeComponent,
    AdminComponent,
    ProfileComponent,
    RegisterComponent,
    TranscationsComponent,
    BuyComponent,
    RenewComponent,
    EstimateComponent,
    PaymentComponent,
    TicketComponent,
    AboutUsComponent,
    HelpComponent,
    ClaimComponent,
    PlanComponent,
    Renew2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiService, AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
