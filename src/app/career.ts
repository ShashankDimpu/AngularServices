export class Career {
    //Constructor with 3 parameters
    constructor(CareerSL_No:number,    Careername: string ,   Careervac:number,  Careersalary:number,  Careercontact:number,) 
    {
        this.CareerSL_No=CareerSL_No;
        this.Careername=Careername;
        this.Careervac=Careervac;
        this.Careersalary=Careersalary
        this.Careercontact=Careercontact;
    }
    //Properties
    CareerSL_No:number ;
    Careername: string ;
    Careervac:number;
    Careersalary:number;
    Careercontact:number;
}
