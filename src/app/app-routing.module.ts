import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",redirectTo:"/",pathMatch:"full"},

  {path:"departement",loadChildren:()=>import("./departement/departement.module").then(m=>m.DepartementModule),
},
{path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule),
},
{path:"contrat",loadChildren:()=>import("./contrat/contrat.module").then(m=>m.ContratModule),
},
{path:"entreprise",loadChildren:()=>import("./entreprise/entreprise.module").then(m=>m.EntrepriseModule),
},
{ path: 'equipe', loadChildren: () => import('./Equipe/equipe.module').then(m => m.EquipeModule) },

{ path: 'equipeDetail', loadChildren: () => import('./detail-equipe/detail-equipe.module').then(m => m.DetailEquipeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
