import { Component, Input, OnInit } from '@angular/core';
import { Niveau } from 'src/app/Models/Niveau';

import { EquipeService } from 'src/app/Services/equipe.service';
import { Equipe } from 'src/app/Models/Equipe';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, switchMap } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  equipes: any;
  data:any;
  EquipeInput!:Equipe;
  equipeToUpdate: Equipe= new Equipe("",Niveau.JUNIOR);
  p: number=1;
  equipe:Equipe | undefined;
  searchvalue !:string
  listsearch : Equipe[]=[];
  refresh$ = new BehaviorSubject(null);
  list?: Observable<Equipe[]>
  constructor(private service:EquipeService) { }

  ngOnInit() {
  this.service.GetAllEquipe().subscribe(
(data)=>
this.equipes=data
  );
    this.list = this.refresh$.pipe(switchMap(() => this.service.search(this.searchvalue)))
  }
  public deleteEquipe(idEquipe:number)
  { 
    let resp=this.service.deleteEquipe(idEquipe);
    resp.subscribe((data)=>this.equipes=data);
  }
  edit(equipe:any){
    this.equipeToUpdate = equipe;
  }
  updateEquipe()
  {let resp=this.service.UpdateEquipe(this.equipeToUpdate);
    resp.subscribe((data)=>this.equipes=data);
  
  }
    onsearch(){
      if ( this.searchvalue.length!=0) {
      this.service.search(this.searchvalue).subscribe(
        (data) => {
          
            this.equipes= data;
        },
        () => this.service.GetAllEquipe
      );
    }
      this.refresh$.next(null);
      }



      afterDeleteEquipe( equipe:Equipe ){
        Swal.fire(
          'NomEquipe   '+equipe.idEquipe+  
          '   Deleted!',
          'Your file has been deleted.',
          'success'
        ); 
      this.equipes();
        let j=this.EquipeInput;
        this.EquipeInput;
        
        }
}
