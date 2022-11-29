import { Component, OnInit } from '@angular/core';
import { AddcontratService } from '../addcontrat.service';
import { Contrat } from '../contrat';
import { Etudiant } from '../etudiant';
import { Specialite } from '../Specialite';

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.css']
})
export class AddcontratComponent implements OnInit {
  etudiant :Etudiant = new Etudiant("hey","hey",1);

contrat: Contrat= new Contrat(new Date(),new Date(),Specialite.CLOUD,false,"",this.etudiant);
message:any;
  constructor(private service:AddcontratService){}
  ngOnInit() {
  }
public AddContratA(){
let resp=this.service.addContrat(this.contrat);
resp.subscribe((data)=>this.message=data);
}
}
