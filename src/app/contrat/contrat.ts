import { Etudiant } from "./etudiant";
import { Specialite } from "./Specialite";

export class Contrat{
    dateDebutContrat: Date |undefined;
    datefinContrat: Date |undefined;
    specialite: Specialite|undefined;
    archive: boolean|undefined;
    descriptionContrat: String|undefined;
    etudiantC: Etudiant|undefined;

    constructor( dateDebutContrat: Date ,
        datefinContrat: Date ,
       specialite: Specialite,
       archive: boolean, descriptionContrat: String,
       etudiantC: Etudiant)
    {  this.dateDebutContrat=dateDebutContrat;
        this.datefinContrat=datefinContrat;
        this.specialite=specialite;
        this.archive=archive;
       this.descriptionContrat=descriptionContrat;
       this.etudiantC=etudiantC;

    };

}