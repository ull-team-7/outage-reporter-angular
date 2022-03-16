import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUtilityComponent } from './create-utility/create-utility.component';
import { HomeComponent } from './home/home.component';
import { OutagesComponent } from './outages/outages.component';
import { ReportOutageComponent } from './report-outage/report-outage.component';
import { UtilityComponent } from './utility/utility.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'outages', component: OutagesComponent },
  { path: 'report-outage', component: ReportOutageComponent },
  { path: 'utility', component: UtilityComponent },
  { path: 'create-utility', component: CreateUtilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
