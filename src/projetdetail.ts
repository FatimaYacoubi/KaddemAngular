import { projet } from './projet';

export class projetdetail {
  idProjetDetail: number | undefined;
  description: string | undefined;
  technologie: string | undefined;
  cout_provisoire: number | undefined;
  dateDebut: Date ;
  dateLimite: Date ;
  projet: projet | undefined;

  constructor(
    
    description: string,
    technologie: string,
    cout_provisoire: number,
    dateDebut: Date,
    dateLimite: Date,
    idProjetDetail?: number,
    projet?: projet
  ) {
    if (idProjetDetail) {
      this.idProjetDetail = idProjetDetail;
      this.description = description;
      this.technologie = technologie;
      this.cout_provisoire = cout_provisoire;
      this.dateDebut = dateDebut;
      this.dateLimite = dateLimite;
      this.projet = projet;
    } else {
      this.idProjetDetail = idProjetDetail;
      this.description = description;
      this.technologie = technologie;
      this.cout_provisoire = cout_provisoire;
      this.dateDebut = dateDebut;
      this.dateLimite = dateLimite;
      this.projet = projet;
    }
  }
}
