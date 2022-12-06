import { projetdetail } from './projetdetail';

export class projet {
  idProjet: number | undefined;
  sujet: string;
  etat: string;

  constructor(idProjet: number | undefined, sujet: string, etat: string) {
    if (idProjet) {
      this.idProjet = idProjet;
      this.sujet = sujet;
      this.etat = etat;
    } else {
      this.sujet = sujet;
      this.etat = etat;
    }
  }
}
