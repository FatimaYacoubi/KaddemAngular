import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ManagecontratsComponent } from './managecontrats/managecontrats.component';
import { AddcontratComponent } from './addcontrat/addcontrat.component';


@NgModule({
  declarations: [
    ManagecontratsComponent,
    AddcontratComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule
  ]
})
export class ContratModule { }
