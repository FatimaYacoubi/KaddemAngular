import { Partenaire } from "./Partenaire";

export class Offre{
    idOffre !: number;
    nomPartenaire !:string;
    descriptionOffre !:string;
    TypeOffre !:string;
    partenaire ! :Partenaire;

}