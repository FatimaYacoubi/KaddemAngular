import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Offre } from 'src/app/Models/Offre';
import { Partenaire } from 'src/app/Models/Partenaire';
import { OffreService } from 'src/app/Services/offre.service';
import { PartenaireService } from 'src/app/Services/partenaire.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {


  offre = new Offre();
  partenaire : Partenaire[]=[]
  formgroup!:FormGroup



  constructor(private OffreService:OffreService, private partenaireservice:PartenaireService, private route:Router , private formbuilder :FormBuilder) { }

  ngOnInit(): void {
   
    // this.univService.GetAllUniversite().subscribe(value => {
    //   this.unversite = value;
    //     const toSelect = this.unversite.find(univer => univer.idUniversite== this.partenaire.universite?.idUniversite);
    //     this.formgroup.get('universite')?.setValue(toSelect);
    //   });

    this.partenaireservice.GetAllPartenaire().subscribe((data)=>{
      this.partenaire = data;
    });
    this.formgroup = this.formbuilder.group({
      nomOffre: ['',[ Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z].*')]],
      descriptionOffre: ['',Validators.required],
      typeOffre: ['', Validators.required],
      listpartenaire: [''],

     
  
  
  });

  }



  get nomOffre(){
    return this.formgroup.get('nomOffre') as FormControl;
  }
  get descriptionOffre(){
    return this.formgroup.get('descriptionOffre')as FormControl;
  }
  get typeOffre(){
    return this.formgroup.get('typeOffre')as FormControl;
  }
  get listpartenaire(){
    return this.formgroup.get('listpartenaire')as FormControl;
  }


  

  Affect(){

    const list = {
    
      nomOffre: this.formgroup.get('nomOffre')?.value,
      descriptionOffre:this.formgroup.get('descriptionOffre')?.value,
      typeOffre:this.formgroup.get('typeOffre')?.value,
      listpartenaire:this.formgroup.get('listpartenaire')?.value,
      idOffre:this.formgroup.get('idOffre')?.value,
    }
    
    
    
        this.OffreService.AddOffre(list,this.formgroup.get('listpartenaire')?.value).subscribe();
        
        this.route.navigate(['offre/mainoffre'])
    
    
    
      }
    

}
