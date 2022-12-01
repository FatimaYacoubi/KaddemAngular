
export class Entreprise {
    idEntreprise: number |undefined;
    nomEntreprise: String;
    locEntreprise: String;
    nbPlaceRest:number;

    constructor(  
        idEntreprise: number,
        nomEntreprise: String,
        locEntreprise: String,
        nbPlaceRest:number)
    
    {   if(idEntreprise){ this.idEntreprise=idEntreprise;
        this.nomEntreprise=nomEntreprise;
        this.locEntreprise=locEntreprise;
        this.nbPlaceRest=nbPlaceRest;
    }
        else {
            this.nomEntreprise=nomEntreprise;
            this.locEntreprise=locEntreprise;
            this.nbPlaceRest=nbPlaceRest;
        }
    };
    

}