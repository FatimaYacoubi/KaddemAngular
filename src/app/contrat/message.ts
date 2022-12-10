import { Contrat } from './contrat';

export class Message {
    contrats: Contrat[]=[];
    totalPages!: number;
    pageNumber!: number;
    pageSize!: number ;
}