import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { MembershipActivationComponent } from './membership-activation/membership-activation.component';



const routes: Routes = [
  {
    path:'profiles',
    component:ProfilesComponent
  },
  {
    path:'membership-activation',
    component:MembershipActivationComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
