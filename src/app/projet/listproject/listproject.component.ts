import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { ProjetService } from 'src/app/projet.service';
import { projet } from 'src/projet';

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css'],
})
export class ListprojectComponent implements OnInit {
  projets!: projet[];
  message: any;
  projet: any;
  projetToUpdate = new projet();
  projetdetailid: any;
  refresh$ = new BehaviorSubject(null);
  list?: Observable<projet[]>;

  constructor(private service: ProjetService, private router: Router) {}

  ngOnInit(): void {
    this.list = this.refresh$.pipe(switchMap((_) => this.service.listprojet()));
  }

  public deleteprojet(idprojet: any) {
    console.log(idprojet);
    let resp = this.service.removeprojet(idprojet);
    resp.subscribe((data) => {
      this.projet = data;
      this.refresh$.next(null);
    });
  }

  getprojet(projet: any) {
    this.projetToUpdate = projet;
  }
  updateprojet(projetdetailid: any) {
    console.log(this.projetToUpdate.idProjet);
    this.service
      .updateprojet(this.projetToUpdate, projetdetailid)
      .subscribe((data) => {
        console.log(projetdetailid);
        this.refresh$.next(null);
      });
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/project/add'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
