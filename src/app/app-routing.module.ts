import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { AddinfoComponent } from './addinfo/addinfo.component';

const routes: Routes = [
  {
    path:'bank_details',
    component:BankDetailsComponent
  },
  {
    path:'addinfo',
    component:AddinfoComponent
  },
  {
    path:'',
    redirectTo:'addinfo',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
