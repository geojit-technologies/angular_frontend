import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProofUploadComponent } from './proof-upload/proof-upload.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { MembershipActivationComponent } from './membership-activation/membership-activation.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    BankDetailsComponent,
    ProofUploadComponent,
    AddinfoComponent,
    ProfilesComponent,
    MembershipActivationComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
