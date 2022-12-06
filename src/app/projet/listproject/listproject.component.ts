import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/projet.service';
import { projet } from 'src/projet';
import { projetdetail } from 'src/projetdetail';

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css'],
})
export class ListprojectComponent implements OnInit {
  projets: any;
  message: any;
  projet: any;
  projetToUpdate = new projet( '', '');

  constructor(private service: ProjetService,private router:Router) {}


  ngOnInit(): void {
    this.service.listprojet().subscribe((data) => (this.projets = data)); 
  }


  
  public deleteprojet(idprojet: number) {
    console.log(idprojet);
    let resp = this.service.removeprojet(idprojet);
    resp.subscribe((data) => (this.projet = data));
    window.location.reload();
  }

  getprojet(projet: any) {
    this.projetToUpdate = projet;
    console.log(this.projetToUpdate);
  }
  updateprojet() {
    console.log(this.projetToUpdate.idProjet);
    let resp = this.service.updateprojet(this.projetToUpdate);
    resp.subscribe((data) => (this.projets = data));
    window.location.reload();
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/project/add'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }




}
