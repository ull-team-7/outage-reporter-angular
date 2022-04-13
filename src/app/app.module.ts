// Angular Compontents
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

// Outage Reporter Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OutagesComponent } from './outages/outages.component';
import { ReportOutageComponent } from './report-outage/report-outage.component';
import { UtilityComponent } from './utility/utility.component';
import { CreateUtilityComponent } from './create-utility/create-utility.component';
import { ViewOutageComponent } from './view-outage/view-outage.component';
import { UtilityAreaComponent } from './utility-area/utility-area.component';
import { CreateUtilityAreaComponent } from './create-utility-area/create-utility-area.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OutagesComponent,
    ReportOutageComponent,
    UtilityComponent,
    CreateUtilityComponent,
    ViewOutageComponent,
    ViewOutageComponent,
    UtilityAreaComponent,
    CreateUtilityAreaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
