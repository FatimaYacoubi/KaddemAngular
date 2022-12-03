
export class Entreprise {
    idEntreprise: number |undefined;
    nomEntreprise: String;
    locEntreprise: String;
   latitude: Number |undefined;
    longitude: Number |undefined;
    nbPlaceRest:number;

    constructor(  
        nomEntreprise: String,
        locEntreprise: String,
        latitude: Number,
        longitude: Number,
        nbPlaceRest:number,
        idEntreprise?: number
        )
    
    {   if(idEntreprise){ this.idEntreprise=idEntreprise;
        this.nomEntreprise=nomEntreprise;
        this.locEntreprise=locEntreprise;
        this.nbPlaceRest=nbPlaceRest;
        this.latitude=latitude;
        this.longitude=longitude;
    }
        else {
            this.nomEntreprise=nomEntreprise;
            this.locEntreprise=locEntreprise;
            this.nbPlaceRest=nbPlaceRest;
            this.latitude=latitude;
            this.longitude=longitude;
        }
    };
    

}