import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Partenaire } from 'src/app/Models/Partenaire';
import { Universite } from 'src/app/Models/Universite';
import { PartenaireService } from 'src/app/Services/partenaire.service';
import { UniversiteService } from 'src/app/Services/universite.service';

@Component({
  selector: 'app-update-partenaire',
  templateUrl: './update-partenaire.component.html',
  styleUrls: ['./update-partenaire.component.css']
})
export class UpdatePartenaireComponent implements OnInit {

  partenaire = new Partenaire
  unversite! : Universite[]
  id:any;
  data:any
  
formgroup: any;
  constructor(private partenaireservice:PartenaireService ,private universiteservice:UniversiteService, private acr:ActivatedRoute , private route:Router, private formbuilder :FormBuilder) { }

  ngOnInit(): void {


      this.partenaireservice.GetPartenaireById(this.acr.snapshot.params['id']).subscribe((result:any)=>
      {this.formgroup= new FormGroup({
        nomPartenaire: new FormControl(result['nomPartenaire']),
        localisation:new FormControl(result['localisation']),
        email:new FormControl(result['email']),
        numTelPar:new FormControl(result['numTelPar']),
        mobilite:new FormControl(result['mobilite']),
        universite:new FormControl(result['universite']),
        support:new FormControl(result['support'])
      })})
  }

  



  
  updatePartenaire(par : Partenaire , idpar:any){
    this.partenaireservice.UpdatePartenaire(par,this.acr.snapshot.params['id']).subscribe();
    window.alert('Your Partenaire has been modified !');
    this.route.navigate(['partenaire/mainpartenaire'])

  }

  GetPartenaireByID(idPar: any){

    this.partenaireservice.GetPartenaireById(idPar).subscribe();
  
  }
}