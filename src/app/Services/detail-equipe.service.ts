import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailEquipe } from '../Models/DetailEquipe';
import { Equipe } from '../Models/Equipe';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {

  DEqURL="http://localhost:8088/SpringMVC/DetailEquipeC/";
  constructor(private http:HttpClient) { }

  GetAllDetailEquipe(): Observable<DetailEquipe[]>{
    return this.http.get<DetailEquipe[]>(this.DEqURL+'Affichage')
  }
  GetDetailEquipeById(idDE:any): Observable<DetailEquipe[]>{
    return this.http.get<DetailEquipe[]>(this.DEqURL+'EquipeById/'+idDE)
  }
  deleteDetailEquipe(idDE: any){
    return this.http.delete(this.DEqURL+'deleteDetailEquipe/'+idDE);
  }
  AddDetailEquipe(detail_equipe: DetailEquipe){
    return this.http.post<DetailEquipe>(this.DEqURL+'addDetailEquipe',detail_equipe);
  }
  UpdateDetailEquipe(detail_equipe: DetailEquipe){
    return this.http.put<DetailEquipe>(this.DEqURL+'updateDetailEquipe',detail_equipe);
  }
}

