import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OutagesComponent } from './outages/outages.component';
import { ReportOutageComponent } from './report-outage/report-outage.component';
import { ViewOutageComponent } from './view-outage/view-outage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'outages', component: OutagesComponent },
  { path: 'report-outage', component: ReportOutageComponent },
  { path: 'outages/:id', component: ViewOutageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
