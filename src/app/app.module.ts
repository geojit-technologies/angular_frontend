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
import { FormsModule } from '@angular/forms';
import { ProfilesComponent } from './profiles/profiles.component';
import { MembershipActivationComponent } from './membership-activation/membership-activation.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PersonalDetailsService } from './services/personal-details.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    
    PersonalDetailsComponent,

    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule ,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,

    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [PersonalDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
