import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';



const routes: Routes = [
  {
    path:'bank_details',
    component:BankDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
