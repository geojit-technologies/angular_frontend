import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MembershipActivationComponent } from './membership-activation/membership-activation.component';
import { HomeComponent } from './home/home.component';
import { NomineeDetailsComponent } from './nominee-details/nominee-details.component';
import { ProofUploadComponent } from './proof-upload/proof-upload.component';

import { PersonalDetailsComponent } from './personal-details/personal-details.component';



import { DashboardComponent } from './dashboard/dashboard.component';


  


const routes: Routes = [

  { path: 'profile', component: ProfilesComponent },
  { path: 'membership-activation', component: MembershipActivationComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }, // Redirect to profile on the default route
  // Add other routes as needed

  {
    path:'login',
    component:SigninComponent
  },
  {
    path:'signin',
    component:SignupComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'bank_details',
    component:BankDetailsComponent
  },
  {

    path:'addinfo',
    component:AddinfoComponent
  },

  {
    path:'nominee-details',
    component: NomineeDetailsComponent
  },
  {
    path:'proof-upload',
    component:ProofUploadComponent
  },
  
  {

    path:'profiles',
    component:ProfilesComponent
  },
  {
    path:'membership-activation',
    component:MembershipActivationComponent
  },
  { path: 'personal-details', component: PersonalDetailsComponent },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
