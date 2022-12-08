import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../Models/Equipe';
import { Universite } from '../Models/Universite';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  EqURL="http://localhost:5001/api/authentication/";
  constructor(private http:HttpClient) { }

  GetAllEquipe(): Observable<Equipe[]>{
    return this.http.get<Equipe[]>(this.EqURL+'AffichageEquipe')
  }
  GetEquipeById(idE:any): Observable<Equipe[]>{
    return this.http.get<Equipe[]>(this.EqURL+'EquipeById/'+idE)
  }
  deleteEquipe(idE: any){
    return this.http.delete(this.EqURL+'deleteEquipe/'+idE);
  }
  AddEquipe(equipe: Equipe){
    return this.http.post<Equipe>(this.EqURL+'addEquipe',equipe);
  }
  UpdateEquipe(equipe: Equipe){
    return this.http.put<Equipe>(this.EqURL+'updateEquipe',equipe);
  }
}
