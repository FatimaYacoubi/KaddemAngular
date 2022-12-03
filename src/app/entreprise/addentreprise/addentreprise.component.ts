import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-addentreprise',
  templateUrl: './addentreprise.component.html',
  styleUrls: ['./addentreprise.component.css']
})
export class AddentrepriseComponent implements OnInit {
  idEntreprise:any;
  entreprises: any={};

  entreprise: Entreprise= new Entreprise("","",33.456128,9.0246438,1);
message:any;
lat:any;
lng:any;
display: any;
center: google.maps.LatLngLiteral = {
    lat: 36.8951882,
    lng: 10.1820547
};
zoom = 4;
moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
}
move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
}

markerOptions: google.maps.MarkerOptions = {
  draggable: false,
  label:"hey"
};
markerPositions: google.maps.LatLngLiteral[] = [
  
];
addMarker(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
}

part1: boolean = false;  constructor(public service:EntrepriseService) { }
close(){
  this.part1=false;
}
  ngOnInit(){
    let resp=this.service.getData();
    resp.subscribe((data)=>this.entreprises=data);  }
  
  public AddEntreprise(){
    let resp=this.service.addEntreprise(this.entreprise);
    resp.subscribe((data)=>this.message="Entreprise Ajouté!");
    this.part1=true;

    
}}
