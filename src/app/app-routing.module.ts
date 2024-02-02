import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MembershipActivationComponent } from './membership-activation/membership-activation.component';
import { HomeComponent } from './home/home.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';



const routes: Routes = [
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
