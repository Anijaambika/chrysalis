import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoforyouComponent } from './infoforyou/infoforyou.component';
import { HumanresourceComponent } from './humanresource/humanresource.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { MarketingComponent } from './marketing/marketing.component';
import { CofeebreakComponent } from './cofeebreak/cofeebreak.component';
import { ResourcesComponent } from './resources/resources.component';

const routes : Routes = [
  {
    path:'',
    redirectTo: '/dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'infoforyou',
    component:InfoforyouComponent
  },
  {
    path:'humanresource',
    component:HumanresourceComponent
  },
  {
    path:'helpdesk',
    component:HelpdeskComponent
  },
  {
    path:'marketing',
    component:MarketingComponent
  },
  {
  path:'cofeebreak',
  component:CofeebreakComponent
  },
  {
   path:'resources',
   component:ResourcesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
