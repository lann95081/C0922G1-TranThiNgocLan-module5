import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {FacilityListComponent} from './component/facility/facility-list/facility-list.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility', component: FacilityListComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'contract', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
