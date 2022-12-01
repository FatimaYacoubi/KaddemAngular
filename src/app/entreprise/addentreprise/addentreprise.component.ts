import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-addentreprise',
  templateUrl: './addentreprise.component.html',
  styleUrls: ['./addentreprise.component.css']
})
export class AddentrepriseComponent implements OnInit {
entreprises:any;
entreprise: Entreprise= new Entreprise(1,"","",1);
message:any;
part1: boolean = false;  constructor(private service:EntrepriseService) { }
close(){
  this.part1=false;
}
  ngOnInit(){
  }
  public AddEntreprise(){
    let resp=this.service.addEntreprise(this.entreprise);
    resp.subscribe((data)=>this.message="Entreprise Ajouté!");
    this.part1=true;
}}
