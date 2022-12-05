import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet--routing.module';
import { AddprojectComponent } from './addproject/addproject.component';
import { ListprojectComponent } from './listproject/listproject.component';


@NgModule({
  declarations: [
    AddprojectComponent,
    ListprojectComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule
  ]
})
export class ProjetModule { }
