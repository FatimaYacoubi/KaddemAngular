import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailEquipe } from '../Models/DetailEquipe';
import { DetailEquipeService } from '../Services/detail-equipe.service';

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.css']
})
export class DetailEquipeComponent implements OnInit {
  detailequipe: DetailEquipe= new DetailEquipe(1,"")
  constructor(private detail_equipe:DetailEquipeService, private route:Router) { }
  message:any;
  ngOnInit(): void {
  }
  public AddDetailEquipe(){
    let resp=this.detail_equipe.AddDetailEquipe(this.detailequipe);
    resp.subscribe((data)=>this.message="DetailEquipe Ajouté!");
    }

}
