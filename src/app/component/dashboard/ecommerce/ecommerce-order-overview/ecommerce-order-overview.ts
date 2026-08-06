import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-ecommerce-order-overview",
  templateUrl: "./ecommerce-order-overview.html",
  styleUrls: ["./ecommerce-order-overview.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ClickOutsideDirective],
})
export class EcommerceOrderOverview {
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
