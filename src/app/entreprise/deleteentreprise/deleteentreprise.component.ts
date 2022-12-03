import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
@Component({
  selector: 'app-deleteentreprise',
  templateUrl: './deleteentreprise.component.html',
  styleUrls: ['./deleteentreprise.component.css']
})
export class DeleteentrepriseComponent implements OnInit {
  entreprises:any
  entreprise:any
  entrepriseToUpdate: Entreprise= new Entreprise("","",12,13,1,1);
  message:any;
  entrep : Entreprise | undefined;
  keys=Object.keys(Entreprise);
  p: number=1;
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
   
      return Object.keys(this.entreprise.data);
    
  }
  public AddEntreprise(){
    let resp=this.service.addEntreprise(this.entreprise);
    resp.subscribe((data)=>this.message="Entreprose Ajouté!");
    this.part1=true;
}

}
