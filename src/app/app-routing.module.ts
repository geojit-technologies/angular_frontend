import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MembershipActivationComponent } from './membership-activation/membership-activation.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { BankDetailsComponent } from './bank-details/bank-details.component';
=======
import { NomineeDetailsComponent } from './nominee-details/nominee-details.component';
import { ProofUploadComponent } from './proof-upload/proof-upload.component';
>>>>>>> 113e1610161f5d9d20833df295bb4ef0ee8cdaef

  


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
    path:'home',
    component:HomeComponent
  },
  {
    path:'bank_details',
    component:BankDetailsComponent
  },
  {
<<<<<<< HEAD
=======
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
>>>>>>> 113e1610161f5d9d20833df295bb4ef0ee8cdaef
    path:'profiles',
    component:ProfilesComponent
  },
  {
    path:'membership-activation',
    component:MembershipActivationComponent
  },
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
