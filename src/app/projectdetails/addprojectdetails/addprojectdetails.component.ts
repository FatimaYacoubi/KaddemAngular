import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetdetailService } from 'src/app/projetdetail.service';
import { projetdetail } from 'src/projetdetail';

@Component({
  selector: 'app-addprojectdetails',
  templateUrl: './addprojectdetails.component.html',
  styleUrls: ['./addprojectdetails.component.css'],
})
export class AddprojectdetailsComponent implements OnInit {
  projetdetails: any;
  projetdetaila = new projetdetail();
  message: any;
  part1: boolean = false;

  constructor(private service: ProjetdetailService, private router: Router) {}
  close() {
    this.part1 = false;
  }
  ngOnInit(): void {}

  public addprojetdetail() {
    console.log(this.projetdetaila);
    this.service
      .addprojetdetail(this.projetdetaila)
      .subscribe(() => (this.message = 'projetdetail added'));

    this.part1 = true;
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/projectdetail/list'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
