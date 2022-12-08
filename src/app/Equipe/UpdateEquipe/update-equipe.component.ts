import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/Models/Equipe';
import { Niveau } from 'src/app/Models/Niveau';


import { EquipeService } from 'src/app/Services/equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  equipes: any;
  data:any;
  equipeToUpdate: Equipe= new Equipe("",Niveau.JUNIOR);
  p: number=1;
  equipe: Equipe | undefined;

  constructor(private service:EquipeService) { }

  ngOnInit() {
    let resp=this.service.GetAllEquipe();
    resp.subscribe((data: any)=>this.equipes=data);
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
}
