import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { projetdetail } from 'src/projetdetail';

@Injectable({
  providedIn: 'root',
})
export class ProjetdetailService {
  constructor(private http: HttpClient) {}

  public addprojetdetail(Projetdetail: projetdetail) {
    console.log(Projetdetail);
    return this.http.post(
      'http://localhost:8088/SpringMVC/ProjetDetailC/addProjetDetail',
      Projetdetail,
      { responseType: 'text' as 'json' }
    );
  }

  public updateProjetdetail(
    Projetdetail: projetdetail
  ): Observable<projetdetail> {
    return this.http.put<projetdetail>(
      'http://localhost:8088/SpringMVC/ProjetDetailC/updateProjetDetail',
      Projetdetail
    );
  }

  public removeProjetdetail(idProjetdetail: any) {
    return this.http.delete(
      'http://localhost:8088/SpringMVC/ProjetDetailC/deleteProjetDetail/' +
        idProjetdetail
    );
  }

  public listProjetdetail(): Observable<projetdetail[]> {
    return this.http.get<projetdetail[]>(
      'http://localhost:8088/SpringMVC/ProjetDetailC/getallProjetdetails'
    );
  }
  public findProjetdetailbyid(idProjetdetail: any) {
    return this.http.get(
      'http://localhost:8088/SpringMVC/ProjetDetailC/getProjetbyid/' +
        idProjetdetail
    );
  }
  public getData(): Observable<projetdetail[]> {
    return this.http.get<projetdetail[]>(
      'http://localhost:8088/SpringMVC/ProjetDetailC/getallProjetdetails'
    );
  }

  public findProjetdetailbydatebetweentwo(
    datedeb: any,
    datefin: any
  ): Observable<projetdetail> {
    return this.http.get(
      'http://localhost:8088/SpringMVC/ProjetDetailC/findByDateDebutBetween/' +
        datedeb +
        '/' +
        datefin
    );
  }

  public findProjetdetailbytechnologieanddescription(
    techno: String
  ): Observable<projetdetail> {
    return this.http.get(
      'http://localhost:8088/SpringMVC/ProjetDetailC/retrieveAllProjetDetailsbytechnologie/' +
        techno +
        '/' +
        techno
    );
  }
}
