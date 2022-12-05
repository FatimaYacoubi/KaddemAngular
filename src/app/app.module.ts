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
import { ProjectdetailsModule } from './projectdetails/projectdetails.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
    ContratModule,
    DepartementModule,
    ProjetModule,
    EquipeModule,
    UniversiteModule,
    ProjectdetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
