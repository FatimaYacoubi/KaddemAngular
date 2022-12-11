import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepService } from 'src/app/Services/service-dep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-departement',
  templateUrl: './main-departement.component.html',
  styleUrls: ['./main-departement.component.css']
})
export class MainDepartementComponent implements OnInit {
depa:any;
  constructor(public departservice:ServiceDepService,
    private acR:ActivatedRoute,
    private router: Router) {
      
     }

  ngOnInit(): void {
    this.departservice.getDepartements().subscribe(
      (d)=>{
       this.depa=d;
      }
    );
    }

deleteDepartement(id:any){
  this.departservice.deleteDepartement(id).subscribe(
    (d)=>{
     console.log("deleted");
     
this.router.navigate(['mainDepartement'])
    });
}

afterDeleteDepartement( e:Departement ){
  console.log(e);
  let j=this.depa.indexOf(e);
  this.depa.splice(j,1);
  Swal.fire(
    'Departement  :   '+e.nomDepart +  
    '   Deleted!',
    'Your file has been deleted.',
    'success'
  );
}
}
