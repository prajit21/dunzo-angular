import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { NewCustomer } from "../../../../shared/data/dashboard/E-commerce/ecommerce";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-new-customers",
  templateUrl: "./new-customers.html",
  styleUrls: ["./new-customers.scss"],
  imports: [ClickOutsideDirective, RouterLink],
})
export class NewCustomers {
  public NewCustomerData = NewCustomer;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
