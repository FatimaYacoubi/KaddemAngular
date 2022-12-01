import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Entreprise } from './entreprise';
@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http:HttpClient) { }
  
  public addEntreprise(Entreprise:any){
    console.log("hello");
    console.log(Entreprise);
    return this.http.post("http://localhost:8002/SpringMVC/Entreprise/addEntreprise",Entreprise,{responseType:'text'as 'json'});
  }
  public getEntreprises(){
    return this.http.get("http://localhost:8002/SpringMVC/Entreprise/AllEntreprises")
  }
  public deleteEntreprise(idEntreprise:any){
    return this.http.delete("http://localhost:8002/SpringMVC/Entreprise/deleteEntreprise/"+idEntreprise)
  }
  public UpdateEntreprise(entreprise:any){
    return this.http.put("http://localhost:8002/SpringMVC/Entreprise/updateEntreprise",entreprise)
  }
}
