import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjetdetailService {
  constructor(private http: HttpClient) {}

  public addprojetdetail(Projetdetail: any) {
    console.log('hello');
    console.log(Projetdetail);
    return this.http.post(
      'http://localhost:8088/SpringMVC/ProjetDetailC/addProjetDetail',
      Projetdetail,
      { responseType: 'text' as 'json' }
    );
  }

  public updateProjetdetail(Projetdetail: any) {
    return this.http.put(
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

  public listProjetdetail() {
    return this.http.get('http://localhost:8088/SpringMVC/ProjetDetailC/getallProjetdetails');
  }
  public findProjetdetailbyid(idProjetdetail: any) {
    return this.http.get(
      'http://localhost:8088/SpringMVC/ProjetDetailC/getProjetbyid' +
        idProjetdetail
    );
  }
}
