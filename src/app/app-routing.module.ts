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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
