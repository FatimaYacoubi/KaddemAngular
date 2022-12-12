import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'src/app/projet.service';
import { projet } from 'src/projet';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteprojet',
  templateUrl: './deleteprojet.component.html',
  styleUrls: ['./deleteprojet.component.css']
})
export class DeleteprojetComponent implements OnInit {


  idContrat:any;
  @Input() projetinput!:projet;
    @Output() notif=new EventEmitter<any>();
    sendnotiftoparent(projetinput:projet){
      console.log(projetinput);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        console.log('yes');
        if (result.isConfirmed) {
          
  
          this.service.removeprojet(projetinput.idProjet).subscribe(()=>{
            this.notif.emit(projetinput);
            // this.route.navigateByUrl('/fournisseur/productM');
          },
          (error)=>{
            console.log("error");
          },
          ()=>{console.log("complete");} );
  
        }
      })
    
  }
  
  constructor(private service:ProjetService , private route:Router , private acr:ActivatedRoute) { }
  


  ngOnInit(): void {
  }
  
  }





