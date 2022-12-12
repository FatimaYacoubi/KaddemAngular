import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { ProjetService } from 'src/app/projet.service';
import { paginationprojet } from 'src/paginationprojet';
import { projet } from 'src/projet';
import Swal from 'sweetalert2';
const pageSize:number = 5;
@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css'],
})
export class ListprojectComponent implements OnInit {
  projets!: projet[];
  projetspage: any;

  projet: any;
  projetToUpdate = new projet();
  projetdetailid: any;
  refresh$ = new BehaviorSubject(null);
  list?: Observable<projet[]>;
  page : any;
  currentSelectedPage:number = 0;
  totalPages: number = 0;
  pageIndexes: Array<number> = [];


  constructor(private service: ProjetService, private router: Router) {}


  getPage(page: number){

    this.service.getPagableproje(page, pageSize)
            .subscribe(
                (message: paginationprojet) => {
                  console.log(message);
                  this.projetspage = message.projets;

                  this.totalPages = message.totalPages;
                  this.pageIndexes = Array(this.totalPages).fill(0).map((x,i)=>i);
                  this.currentSelectedPage = message.pageNumber;
                },
                (error) => {
                  this.projetspage=error
                  
                }
            );
  }

  getPaginationWithIndex(index: number) {
    this.getPage;
  }
  active(index: number) {
    if(this.currentSelectedPage == index ){
      return {
        active: true
      };
    } return {
      active: false
    };
  }
  
  nextClick(){
    if(this.currentSelectedPage < this.totalPages-1){
      this.getPage(++this.currentSelectedPage);
    }  
  }
  
  previousClick(){
    if(this.currentSelectedPage > 0){
      this.getPage(--this.currentSelectedPage);
    }  
  }

  ngOnInit(): void {

    this.getPage(0);
  }
  projetgetting(){
    this.service.listprojet().subscribe((d)=>this.projetspage=d);
  }

  afterDeleteContrat( o:projet ){
    Swal.fire(
      'Offre   '+o.idProjet+  
      '   Deleted!',
      'Your file has been deleted.',
      'success'
    ); 
    this.refresh$.next(null);
    
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
