import { Injectable } from '@angular/core';
//import module policy.ts
import {Policy} from './policy'
@Injectable({
  providedIn: 'root'
})
export class PolicyService {
//method
  public getPolicies() 
  {
 
    let policies:Policy[]; //array

    policies=
    [
        new Policy(1,'Term Insurance',35000,+915637289104),
        new Policy(2,'Term Insurance_Spouse',25000,+913452617809),
        new Policy(3,'Term Insurance_Child',10000,+913527352781),
        new Policy(4,'Term Insurance_Coronavirus',10000,+912314267893),
        new Policy(5,'Term Insurance_LifeInsurance',40000,+919087634262),
        new Policy(6,'Term Insurance_Vehicle',35000,+912437893432)
    ]

    return policies;               
}
}