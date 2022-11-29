import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { ContratModule } from './contrat/contrat.module';
import { DepartementModule } from './departement/departement.module';
import { ProjetModule } from './projet/projet-.module';
import { EquipeModule } from './equipe/equipe.module';
import { UniversiteModule } from './universite/universite.module';
import { AddcontratService } from './contrat/addcontrat.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   BrowserAnimationsModule,
    HomeModule,
    UserModule,
    ContratModule,
    DepartementModule,
    ProjetModule,
    EquipeModule,
    UniversiteModule,
  ],
  providers: [AddcontratService],
  bootstrap: [AppComponent]
})
export class AppModule { }
