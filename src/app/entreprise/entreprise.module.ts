import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
   NgxPaginationModule,
   AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDdEECHzvdivYqCtd7lzvsez8CK5ElC7x0'
  })

  ]
})
export class EntrepriseModule { }
