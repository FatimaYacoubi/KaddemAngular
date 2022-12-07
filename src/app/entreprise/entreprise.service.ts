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
  entreprises: any={};
  public addEntreprise(Entreprise:any){
    return this.http.post("http://localhost:5001/api/authentication/addEntreprise",Entreprise,{responseType:'text'as 'json'});
  }
  public getEntreprises(){
    return this.http.get("http://localhost:5001/api/authentication/AllEntreprises")
  }
  public deleteEntreprise(idEntreprise:any){
    return this.http.delete("http://localhost:5001/api/authentication/deleteEntreprise/"+idEntreprise)
  }
  public UpdateEntreprise(entreprise:any){
    return this.http.put("http://localhost:5001/api/authentication/updateEntreprise",entreprise)
  }
  public distance(Entreprise:any){
    return this.http.post("http://localhost:5001/api/authentication/distance",Entreprise,{responseType:'text'as 'json'});
  }
 
}
