import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { DetailEquipeComponent } from '../detail-equipe/detail-equipe.component';
import { UpdateDetailEquipeComponent } from '../detail-equipe/update-detail-equipe/update-detail-equipe.component'; */
import { EquipeComponent } from './equipe.component';
import { UpdateEquipeComponent } from './UpdateEquipe/update-equipe.component';

const routes: Routes = [{ path: 'update', component: UpdateEquipeComponent },
{path: 'addEquipe', component: EquipeComponent},
// { path: 'DetailEquipeadd', component: DetailEquipeComponent },
// {path: 'Edit', component: UpdateDetailEquipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
