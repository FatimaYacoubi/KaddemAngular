import { projetdetail } from "./projetdetail";


export class projet {
  idProjet: number | undefined;
  sujet: string | undefined;
  etat: string | undefined;
  projetDetail: projetdetail| undefined;

    constructor(  sujet: string, etat: string ,projetDetail?:projetdetail ,idProjet?: number ) {
      if (idProjet) {
        this.idProjet = idProjet;
        this.sujet = sujet;
        this.etat = etat;
        this.projetDetail = projetDetail;
        
      } else {
        this.idProjet = idProjet;
        this.sujet = sujet;
        this.etat = etat;
        this.projetDetail = projetDetail;
       
      }
    }
  
}
