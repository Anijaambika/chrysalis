import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AppRoutingModule } from './app-routing.module';
import { MdButtonModule, MdCardModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoforyouComponent } from './infoforyou/infoforyou.component';
import { HumanresourceComponent } from './humanresource/humanresource.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { MarketingComponent } from './marketing/marketing.component';
import { CofeebreakComponent } from './cofeebreak/cofeebreak.component';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    BrowserAnimationsModule,
    AppComponent,
    DashboardComponent,
    InfoforyouComponent,
    HumanresourceComponent,
    HelpdeskComponent,
    MarketingComponent,
    CofeebreakComponent,
    ResourcesComponent
  ],
  imports: [
    Ng2CarouselamosModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
