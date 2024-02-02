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
=======
  
>>>>>>> 819a9f4f28bc5703e769706e848ab0e42dd88784

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
    path:'addinfo',
    component:AddinfoComponent
  },
  {
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
  
<<<<<<< HEAD
 
=======

>>>>>>> 819a9f4f28bc5703e769706e848ab0e42dd88784
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
