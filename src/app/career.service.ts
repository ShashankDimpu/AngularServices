import { Injectable } from '@angular/core';
import { Career } from './career';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  public getCareers() 
  {
 
    let Careers:Career[]; //array

    Careers=
    [
        new Career(1,'HR',35000,25,+915637289104),
        new Career(2,'Design',25000,53,+913452617809),
        new Career(3,'Team Lead',10000,24,+913527352781),
        new Career(4,'Banking',10000,11,+912314267893),
        new Career(5,'Accontant',40000,2,+919087634262),
        new Career(6,'Developer',35000,57,+912437893432)
    ]

    return Careers;               
}
}
