import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/projet.service';
import { projet } from 'src/projet';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
})
export class AddprojectComponent implements OnInit {
  projets: any = {};
  projeta: projet = new projet(2, '', '');
  message: any;
  part1: boolean = false;
  constructor(private service: ProjetService) {}

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
}
