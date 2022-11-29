import { Component, OnInit } from '@angular/core';
import { AddcontratService } from '../addcontrat.service';
import { AddcontratComponent } from '../addcontrat/addcontrat.component';
import { Contrat } from '../contrat';
import { Etudiant } from '../etudiant';
import { Specialite } from '../Specialite';

@Component({
  selector: 'app-deletecontrat',
  templateUrl: './deletecontrat.component.html',
  styleUrls: ['./deletecontrat.component.css']
})
export class DeletecontratComponent implements OnInit {
 
  contrats:any
 etudiantC:any
 message:any
 contrat:any
 SingleDataSet:any
 single :any;
 etudiant :Etudiant = new Etudiant("","");
 contratToUpdate: Contrat= new Contrat(new Date(),new Date(),Specialite.CLOUD,false,"",this.etudiant);

  constructor(private service:AddcontratService) { }
  
  public deleteContrat(idContrat:number)

  { console.log(idContrat);
    let resp=this.service.deleteContrat(idContrat);
    resp.subscribe((data)=>this.contrats=data);
  }
  ngOnInit() {
    let resp=this.service.getContrats();
    resp.subscribe((data)=>this.contrats=data);

  }
edit(contrat:any){
  this.contratToUpdate = contrat;
}
updateContrat()
{let resp=this.service.UpdateContrat(this.contratToUpdate);
  resp.subscribe((data)=>this.contrats=data);

}
exportProductsPdf()
 { this.service.exportPdfContratt().subscribe(x =>
  { const blob = new Blob([x], {type: 'application/pdf'}); 
if (window.navigator && (window.navigator as any).msSaveOrOpenBlob)
 { (window.navigator as any).msSaveOrOpenBlob(blob);
   return; }
const data = window.URL.createObjectURL(blob); 
const link =document.createElement('a');
 link.href=data;
 console.log(data);
link.download ='Contrats.pdf';
 link.dispatchEvent( new MouseEvent('click', {bubbles: true, cancelable:true, view: window})); 
setTimeout(function() {
  window.URL.revokeObjectURL(data);
   link.remove(); 
} ,100);

}); }
o(){
  {
    this.service. getTypePercentage()
      .subscribe(data => {
        console.log(data);
        this.single = data.map(datum => ({ name: datum.type, value: datum.count }));
    });
  }
}
exportContratExcel()
 { this.service.exportExcelContratt().subscribe(x =>
  { const blob = new Blob([x], {type: 'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}); 
if (window.navigator && (window.navigator as any).msSaveOrOpenBlob)
 { (window.navigator as any).msSaveOrOpenBlob(blob);
   return; }
const data = window.URL.createObjectURL(blob); 
const link =document.createElement('a');
 link.href=data;
link.download ='Contrats.xlsx';
 link.dispatchEvent( new MouseEvent('click', {bubbles: true, cancelable:true, view: window})); 
setTimeout(function() {
  window.URL.revokeObjectURL(data);
   link.remove(); 
} ,100);

}); }

 saleData =([
  { name: "CLOUD", value: 105000 },
  { name: "SECURITE", value: 55000 },
  { name: "IA", value: 15000 },
  { name: "TWIN", value: 150000 },
  { name: "RESEAUX", value: 20000 },
  { name: "GL", value: 20000 },
  { name: "DS", value: 20000 }


]);
}
