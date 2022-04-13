import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUtilityComponent } from './create-utility/create-utility.component';
import { HomeComponent } from './home/home.component';
import { OutagesComponent } from './outages/outages.component';
import { ReportOutageComponent } from './report-outage/report-outage.component';
import { UtilityComponent } from './utility/utility.component';
import { UtilityAreaComponent } from './utility-area/utility-area.component';
import { CreateUtilityAreaComponent } from './create-utility-area/create-utility-area.component';
import { UtilityAreaChoiceComponent } from './utility-area-choice/utility-area-choice.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'outages', component: OutagesComponent },
  { path: 'report-outage', component: ReportOutageComponent },
  { path: 'utility', component: UtilityComponent },
  { path: 'create-utility', component: CreateUtilityComponent },
  { path: 'create-utility-area', component: CreateUtilityAreaComponent },
  { path: 'utility-area', component: UtilityAreaChoiceComponent },
  { path: 'utility-area/:id', component: UtilityAreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
