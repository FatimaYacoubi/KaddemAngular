import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-addentreprise',
  templateUrl: './addentreprise.component.html',
  styleUrls: ['./addentreprise.component.css']
})
export class AddentrepriseComponent implements OnInit {
  idEntreprise:any;
  entreprises: any={};

  entreprise: Entreprise= new Entreprise("","",33.456128,9.0246438,1);
message:any;
display: any;

lht:any = 36.998433225250245;
lng:any = 9.264836730672927;
zoom: any=6
part1: boolean = false;  constructor(public service:EntrepriseService) { }
close(){
  this.part1=false;
}
  ngOnInit(){
    let resp=this.service.getData();
    resp.subscribe((data)=>this.entreprises=data);  }
  
  public AddEntreprise(){
    let resp=this.service.addEntreprise(this.entreprise);
    resp.subscribe((data)=>this.message="Entreprise Ajouté!");
    this.part1=true;

    
}}
