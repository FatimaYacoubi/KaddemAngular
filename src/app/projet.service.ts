import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { paginationprojet } from 'src/paginationprojet';
import { projet } from 'src/projet';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  constructor(private http: HttpClient) {}

  public addprojet(Projet: projet, idP: number) {
    console.log('hello');
    console.log(Projet);
    console.log(idP);

    let HTTPOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      'http://localhost:8088/SpringMVC/ProjetC/addProjet/' + idP,
      Projet,
      HTTPOptions
    );
  }

  public updateprojet(projet: projet, idProjetdetail: any): Observable<projet> {
    return this.http.put<projet>(
      'http://localhost:8088/SpringMVC/ProjetC/updateProjet/' + idProjetdetail,
      projet
    );
  }

  public removeprojet(idProjet: any): Observable<projet> {
    return this.http.delete(
      'http://localhost:8088/SpringMVC/ProjetC/deleteProjet/' + idProjet
    );
  }

  public listprojet(): Observable<projet[]> {
    return this.http.get<projet[]>(
      'http://localhost:8088/SpringMVC/ProjetC/getallProjets'
    );
  }

  public findprojetbyid(idProjet: any): Observable<projet> {
    return this.http
      .get('http://localhost:8088/SpringMVC/ProjetC/getallProjets' + idProjet)
      .pipe(shareReplay(1));
  }


  getPagableproje(pageNumber: number, 
    pageSize: number): Observable<paginationprojet> {
// Initialize Params Object
let params = new HttpParams();

// Begin assigning parameters
params = params.append('page', pageNumber.toString());
params = params.append('size', pageSize.toString());

return this.http.get<paginationprojet>("http://localhost:8088/SpringMVC/ProjetC/findAllEPaginate", { params: params })

}
}
