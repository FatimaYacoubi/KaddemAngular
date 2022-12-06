import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetdetailService } from 'src/app/projetdetail.service';
import { projetdetail } from 'src/projetdetail';

@Component({
  selector: 'app-listprojectdetails',
  templateUrl: './listprojectdetails.component.html',
  styleUrls: ['./listprojectdetails.component.css'],
})
export class ListprojectdetailsComponent implements OnInit {
  projetdetails: any;
  message: any;
  projetdetail: any;


  projetdetailToUpdate = new projetdetail('','',20,new Date(),new Date(),);

  constructor(private service: ProjetdetailService,private router:Router) {}

  ngOnInit(): void {
    this.service.listProjetdetail().subscribe((data) => (this.projetdetails = data)); 
  }


  
  public deleteProjetdetail(idProjetdetail: number) {
    console.log(idProjetdetail);
    let resp = this.service.removeProjetdetail(idProjetdetail);
    resp.subscribe((data) => (this.projetdetails = data));
    window.location.reload();
  }

  getProjetdetail(projet: any) {
    this.projetdetailToUpdate = projet;
    console.log(this.projetdetailToUpdate);
  }
  updateProjetdetailt() {
    console.log(this.projetdetailToUpdate.idProjetDetail);
    let resp = this.service.updateProjetdetail(this.projetdetailToUpdate);
    resp.subscribe((data) => (this.projetdetails = data));
    //window.location.reload();
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/projectdetail/add'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }


}
