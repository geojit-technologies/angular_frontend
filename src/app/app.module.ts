import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProofUploadComponent } from './proof-upload/proof-upload.component';
import { NomineeDetailsComponent } from './nominee-details/nominee-details.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
<<<<<<< HEAD

// import { ProfileComponent } from './profile/profile.component';
=======
>>>>>>> 57cc012c34629dd3a6b065e69b5d1fb8b15a1872
import { FormsModule } from '@angular/forms';
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
    NomineeDetailsComponent,
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
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
