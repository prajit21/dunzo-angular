import { Component } from "@angular/core";

import { RecentOrderTwo } from "../../../../shared/data/dashboard/E-commerce/ecommerce";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-ecommerce-recent-order",
  templateUrl: "./ecommerce-recent-order.html",
  styleUrls: ["./ecommerce-recent-order.scss"],
  imports: [ClickOutsideDirective],
})
export class EcommerceRecentOrder {
  public RecentOrder = RecentOrderTwo;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
