import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { DeletecontratComponent } from './deletecontrat/deletecontrat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddcontratComponent,
    DeletecontratComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContratRoutingModule
  ]
})
export class ContratModule { }
