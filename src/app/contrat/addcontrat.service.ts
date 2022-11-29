import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { map } from 'rxjs';
import { IContrat, ITypePercentage } from './contrat.interface';
@Injectable({
  providedIn: 'root'
})
export class AddcontratService {

  constructor(private http:HttpClient) { }

  public addContrat(contrat:any){
    console.log("hello");
    console.log(contrat);
    return this.http.post("http://localhost:8002/SpringMVC/ContratC/addContrat",contrat,{responseType:'text'as 'json'});
  }
  public getContrats(){
    return this.http.get("http://localhost:8002/SpringMVC/ContratC/AllContrats")
  }
  public deleteContrat(idContrat:any){
    return this.http.delete("http://localhost:8002/SpringMVC/ContratC/deleteContrat/"+idContrat)
  }
  public UpdateContrat(contrat:any){
    return this.http.put("http://localhost:8002/SpringMVC/ContratC/updateContrat",contrat)
  }
  public exportPdfContratt():Observable<Blob>
  { 
    return this.http.get('http://localhost:8002/SpringMVC/ContratC/export/pdf',{responseType:'blob'});}
  
  public exportExcelContratt():Observable<Blob>
  { 
    return this.http.get('http://localhost:8002/SpringMVC/ContratC/export/excel',{responseType:'blob'});}
  
  
  
    public getTypePercentage(): Observable<Array< ITypePercentage>> {
      return this.http.get('http://localhost:8002/SpringMVC/ContratC/chartbyspecialite')
        .pipe(map((d:any) => d));
    }
  }
 