import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { DeletecontratComponent } from './deletecontrat/deletecontrat.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AddcontratComponent,
    DeletecontratComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContratRoutingModule,
    NgxChartsModule,
    NgxPaginationModule
  ]
})
export class ContratModule { }
