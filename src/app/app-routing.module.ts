import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"departement",loadChildren:()=>import("./departement/departement.module").then(m=>m.DepartementModule),
},
{path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule),
},
  { path: 'projectdetails', loadChildren: () => import('./projectdetails/projectdetails.module').then(m => m.ProjectdetailsModule) }
  ,
  { path: 'project', loadChildren: () => import('./projet/projet-.module').then(m => m.ProjetModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
