export class Policy 
{
    //Constructor with 3 parameters
    constructor(policyID:number,    policyname: string ,   policyrate:number,  policycontact:number,) 
    {
        this.policyID=policyID;
        this.policyname=policyname;
        this.policyrate=policyrate;
        this.policycontact=policycontact;
    }
    //Properties
    policyID:number ;
    policyname: string ;
    policyrate:number;
    policycontact:number;
}