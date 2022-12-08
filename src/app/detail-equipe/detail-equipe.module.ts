import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEquipeRoutingModule } from './detail-equipe-routing.module';
import { DetailEquipeComponent } from './detail-equipe.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    DetailEquipeComponent
  ],
  imports: [
    CommonModule,
    DetailEquipeRoutingModule,
    FormsModule
  ]
})
export class DetailEquipeModule { }
