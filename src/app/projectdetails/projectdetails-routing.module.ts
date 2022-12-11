import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddprojectdetailsComponent } from './addprojectdetails/addprojectdetails.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ListprojectdetailsComponent } from './listprojectdetails/listprojectdetails.component';

const routes: Routes = [
  { path: 'list', component: ListprojectdetailsComponent },
  { path: 'add', component: AddprojectdetailsComponent },
  { path: 'calender', component: CalendrierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectdetailsRoutingModule {}
