import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProjetdetailService } from 'src/app/projetdetail.service';
import { projetdetail } from 'src/projetdetail';

@Component({
  selector: 'app-listprojectdetails',
  templateUrl: './listprojectdetails.component.html',
  styleUrls: ['./listprojectdetails.component.css'],
})
export class ListprojectdetailsComponent implements OnInit {
  projetdetails: any;
  projetdetailsdate: any;
  message: any;
  projetdetail: any;
  hide: Boolean = true;
  hidelist: Boolean = false;
  hidelistdate: Boolean = true;
  search: String = '';

  refresh$ = new BehaviorSubject(null);
  list?: Observable<projetdetail[]>;

  projetdetailToUpdate!: projetdetail;

  constructor(
    private service: ProjetdetailService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  formgroup = this.fb.group({
    idProjetDetail: 0,
    description: [''],
    technologie: [''],
    cout_provisoire: 0,
    dateDebut: new Date(),
    dateLimite: new Date(),
  });

  get idProjetDetail() {
    return this.formgroup.get('idProjetDetail');
  }

  get description() {
    return this.formgroup.get('description');
  }
  get technologie() {
    return this.formgroup.get('technologie');
  }
  get cout_provisoire() {
    return this.formgroup.get('cout_provisoire');
  }
  get dateDebut() {
    return this.formgroup.get('dateDebut');
  }
  get dateLimite() {
    return this.formgroup.get('dateLimite');
  }

  formgroupdates = this.fb.group({
    dated: new Date(),
    datel: new Date(),
  });

  get dated() {
    return this.formgroupdates.get('dated');
  }
  get datel() {
    return this.formgroupdates.get('datel');
  }

  ngOnInit(): void {
    this.list = this.refresh$.pipe(switchMap((_) => this.service.getData()));
  }

  public deleteProjetdetail(idProjetdetail: any) {
    console.log(idProjetdetail);
    this.service.removeProjetdetail(idProjetdetail).subscribe((data) => {
      this.projetdetails = data;
      this.refresh$.next(null);
    });
  }

  getProjetdetail(projet: projetdetail) {
    this.projetdetailToUpdate = projet;

    this.formgroup.patchValue({
      idProjetDetail: this.projetdetailToUpdate.idProjetDetail,
      description: this.projetdetailToUpdate.description,
      technologie: this.projetdetailToUpdate.technologie,
      cout_provisoire: this.projetdetailToUpdate.cout_provisoire,
      dateDebut: this.projetdetailToUpdate.dateDebut,
      dateLimite: this.projetdetailToUpdate.dateLimite,
    });
    this.hide = false;

    console.log(this.projetdetailToUpdate);
  }

  updateProjetdetailt(f: any) {
    this.service.updateProjetdetail(f).subscribe((d) => {
      console.log(d);
      this.refresh$.next(null);
      this.hide = true;
    });
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/projectdetail/add'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  resetlists() {
    this.hidelist = false;
    this.hidelistdate = true;
  }

  datebetweentwo(f: any) {
    this.hidelist = true;
    this.hidelistdate = false;
    console.log(f.dated);
    this.service
      .findProjetdetailbydatebetweentwo(f.dated, f.datel)
      .subscribe((d) => {
        console.log(d);
        this.projetdetails = d;
      });
  }

  findbytechno(techno: String) {
    console.log(techno);
    if (techno.length != 0) {
      this.service
        .findProjetdetailbytechnologieanddescription(techno)
        .subscribe((d) => {
          this.projetdetails = d;
          console.log(d);
        });
    }
  }
}
