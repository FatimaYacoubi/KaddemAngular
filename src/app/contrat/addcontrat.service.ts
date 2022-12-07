import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { map } from 'rxjs';
import { IContrat, ITypePercentage } from './contrat.interface';
import { Specialite } from './Specialite';
@Injectable({
  providedIn: 'root'
})
export class AddcontratService {

  constructor(private http:HttpClient) { }

  public addContrat(contrat:any){
    console.log("hello");
    console.log(contrat);
    return this.http.post("http://localhost:5001/api/authentication/addContrat",contrat,{responseType:'text'as 'json'});
  }
  public getContrats(){
    return this.http.get("http://localhost:5001/api/authentication/AllContrats")
  }
  public deleteContrat(idContrat:any){
    return this.http.delete("http://localhost:5001/api/authentication/deleteContrat/"+idContrat)
  }
  public UpdateContrat(contrat:any){
    return this.http.put("http://localhost:5001/api/authentication/updateContrat",contrat)
  }
  public exportPdfContratt():Observable<Blob>
  { 
    return this.http.get('http://localhost:5001/api/authentication/export/pdf',{responseType:'blob'});}
  
  public exportExcelContratt():Observable<Blob>
  { 
    return this.http.get('http://localhost:5001/api/authentication/export/excel',{responseType:'blob'});}
  
  public getContratBySpecialite(specialite:any)
  {
    return this.http.get('http://localhost:5001/api/authentication/specialite/'+ specialite);
  }
  
    public getTypePercentage(): Observable<Array< ITypePercentage>> {
      return this.http.get('http://localhost:5001/api/authentication/chartbyspecialite')
        .pipe(map((d:any) => d));
    }
  }
 