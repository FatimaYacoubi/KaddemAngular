import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  constructor(private http: HttpClient) {}

  public addprojet(Projet: any) {
    console.log('hello');
    console.log(Projet);
    return this.http.post(
      'http://localhost:8088/SpringMVC/ProjetC/addProjet',
      Projet,
      { responseType: 'text' as 'json' }
    );
  }

  public updateprojet(projet: any) {
    return this.http.put(
      'http://localhost:8088/SpringMVC/ProjetC/updateProjet',
      projet
    );
  }

  public removeprojet(idProjet: any) {
    return this.http.delete(
      'http://localhost:8088/SpringMVC/ProjetC/deleteProjet/' + idProjet
    );
  }

  public listprojet() {
    return this.http.get(
      'http://localhost:8088/SpringMVC/ProjetC/getallProjets'
    );
  }

  public findprojetbyid(idProjet: any) {
    return this.http.get(
      'http://localhost:8088/SpringMVC/ProjetC/getallProjets' + idProjet
    );
  }
}
