import { projet } from "./projet";
import { projetdetail } from "./projetdetail";

export class paginationprojet {
    totalPages!: number;
    pageNumber!:number;
    pageSize!:number;
    projets!: projet[];
    projetdetails!: projetdetail[];
  }