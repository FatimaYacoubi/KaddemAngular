import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { AdddepartementComponent } from './adddepartement/adddepartement.component';
;


@NgModule({
  declarations: [
    AdddepartementComponent ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
  ],
  providers: [
    
  ]
})
export class DepartementModule { }
