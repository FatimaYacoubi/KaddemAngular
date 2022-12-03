import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-addentreprise',
  templateUrl: './addentreprise.component.html',
  styleUrls: ['./addentreprise.component.css']
})
export class AddentrepriseComponent implements OnInit {
entreprises:any;
entreprise: Entreprise= new Entreprise(1,"","",1);
message:any;
lat:any;
lng:any;
display: any;
center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
};
zoom = 4;
moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
}
move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
}
part1: boolean = false;  constructor(private service:EntrepriseService) { }
close(){
  this.part1=false;
}
  ngOnInit(){

  }
  ngAfterContentInit(){
    this.lat="33.456128";
this.lng="9.0246438";
  }
  public AddEntreprise(){
    let resp=this.service.addEntreprise(this.entreprise);
    resp.subscribe((data)=>this.message="Entreprise Ajouté!");
    this.part1=true;
}}
