import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/projet.service';
import { projet } from 'src/projet';
import { projetdetail } from 'src/projetdetail';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
})
export class AddprojectComponent implements OnInit {
  projets: any = {};
  projeta: projet = new projet( '', '');
  message: any;
  part1: boolean = false;
  constructor(private service: ProjetService,private router:Router) {}

  close() {
    this.part1 = false;
  }
  ngOnInit(): void {
    let resp = this.service.listprojet();
    resp.subscribe((data) => (this.projets = data));
  }

  public addprojet() {
    let resp = this.service
      .addprojet(this.projeta)
      .subscribe((data) => (this.message = 'projet added'));

    this.part1 = true;
  
  }


  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/project/list'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
