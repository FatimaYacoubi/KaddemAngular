import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet--routing.module';
import { AddprojectComponent } from './addproject/addproject.component';
import { ListprojectComponent } from './listproject/listproject.component';
import { FormsModule } from '@angular/forms';
import { ProjectdetailsModule } from '../projectdetails/projectdetails.module';
import { DeleteprojetComponent } from './deleteprojet/deleteprojet.component';

@NgModule({
  declarations: [
    AddprojectComponent,
   
    ListprojectComponent,
        DeleteprojetComponent,
  ],
  imports: [CommonModule, ProjetRoutingModule, FormsModule],
})
export class ProjetModule {}
