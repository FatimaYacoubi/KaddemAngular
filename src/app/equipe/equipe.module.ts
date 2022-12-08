import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { BackModule } from '../back/back.module';
import { AddEquipeComponent } from './AddEquipe/add-equipe.component';
import { UpdateEquipeComponent } from './UpdateEquipe/update-equipe.component';
import { DetailEquipeModule } from '../detail-equipe/detail-equipe.module';



@NgModule({
  declarations: [
    EquipeComponent,
    AddEquipeComponent,
    UpdateEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    BackModule,
    FormsModule ,
    ReactiveFormsModule,
    DetailEquipeModule,
    
  ]
})
export class EquipeModule { }
