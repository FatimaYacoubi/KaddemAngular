import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
   NgxPaginationModule,
   GoogleMapsModule

  ]
})
export class EntrepriseModule { }
