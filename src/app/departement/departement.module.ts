import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { AdddepartementComponent } from './adddepartement/adddepartement.component';
import { BackModule } from '../back/back.module';
;


@NgModule({
  declarations: [
    AdddepartementComponent ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    BackModule
  ],
  providers: [
    
  ]
})
export class DepartementModule { }
