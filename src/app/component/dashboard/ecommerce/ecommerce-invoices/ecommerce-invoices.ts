import { Component } from "@angular/core";

import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-ecommerce-invoices",
  templateUrl: "./ecommerce-invoices.html",
  styleUrls: ["./ecommerce-invoices.scss"],
  imports: [ClickOutsideDirective],
})
export class EcommerceInvoices {
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
