
import { Component } from '@angular/core';
 //import PolicyService and Policy class
import { PolicyService } from './policy.service';
import { Policy } from './policy';
import { CareerService } from './career.service';
import { Career } from './career';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
 
export class AppComponent
{
 
   policies : Policy[] | undefined; //array
   policyService; //variable
 
   constructor()
   {
     //creating an instance for the PolicyService class to access getPolicies()
     this.policyService=new PolicyService();
   }
   //creating a function getPolicyDetails() in app.component to access the getPolicies() from PolicyService
   getPolicyDetails()
  {
     //accessing the getpolicies() method from policyService class
     //and store it in the array policies
     this.policies=this.policyService.getPolicies();
   }
    //ngStyle
  color: string = 'red';
  
}

export class App1Component {

  Careers: Career[] | undefined; //array
  CareerService; //variable

  constructor() {
    //creating an instance for the PolicyService class to access getPolicies()
    this.CareerService = new CareerService();
  }
  //creating a function getPolicyDetails() in app.component to access the getPolicies() from PolicyService
  getCarrerDetails() {
    //accessing the getpolicies() method from policyService class
    //and store it in the array policies
    this.Careers = this.CareerService.getCareers();
  }
  //ngStyle
  color: string = 'red';

}