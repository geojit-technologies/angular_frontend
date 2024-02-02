import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { MembershipActivationComponent } from './membership-activation/membership-activation.component';

const routes: Routes = [
  { path: 'profile', component: ProfilesComponent },
  { path: 'membership-activation', component: MembershipActivationComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }, // Redirect to profile on the default route
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
