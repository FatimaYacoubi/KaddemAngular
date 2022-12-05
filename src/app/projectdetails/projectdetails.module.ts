import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectdetailsRoutingModule } from './projectdetails-routing.module';
import { AddprojectdetailsComponent } from './addprojectdetails/addprojectdetails.component';
import { ListprojectdetailsComponent } from './listprojectdetails/listprojectdetails.component';


@NgModule({
  declarations: [
    AddprojectdetailsComponent,
    ListprojectdetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectdetailsRoutingModule
  ]
})
export class ProjectdetailsModule { }
