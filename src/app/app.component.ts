import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  customer = new Customer();
  submitted = false;
  customers: Customer[];

  constructor(
    private customerService: CustomerService
//     private location: Location
  ) { }


  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

 addCustomer() {
   this.submitted = true;
   this.save();
 }

  // goBack(): void {
  //   this.location.back();
  // }

  private save(): void {
    console.log(this.customer);
    this.customerService.addCustomer(this.customer)
        .subscribe();
  }
}
