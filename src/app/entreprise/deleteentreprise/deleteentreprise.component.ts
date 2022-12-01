import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-deleteentreprise',
  templateUrl: './deleteentreprise.component.html',
  styleUrls: ['./deleteentreprise.component.css']
})
export class DeleteentrepriseComponent implements OnInit {
  entreprises:any
  entreprise:any
  entrepriseToUpdate: Entreprise= new Entreprise(1,"","",1);
  message:any;
  part1: boolean = false; 
  constructor(private service:EntrepriseService) { }
  public deleteEntreprise(idEntreprise:number)

  { console.log(idEntreprise);
    let resp=this.service.deleteEntreprise(idEntreprise);
    resp.subscribe((data)=>this.entreprise=data);
  }
  edit(entreprise:any){
    this.entrepriseToUpdate = entreprise;
  }
  updateentreprise()
  {let resp=this.service.UpdateEntreprise(this.entrepriseToUpdate);
    resp.subscribe((data)=>this.entreprises=data);
  
  }
  ngOnInit() {
    let resp=this.service.getEntreprises();
    resp.subscribe((data)=>this.entreprises=data);
  }
  public AddEntreprise(){
    let resp=this.service.addEntreprise(this.entreprise);
    resp.subscribe((data)=>this.message="Entreprose Ajouté!");
    this.part1=true;
}

}
