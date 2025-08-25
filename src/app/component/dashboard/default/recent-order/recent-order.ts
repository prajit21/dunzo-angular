import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { RecentOrders } from "../../../../shared/data/dashboard/default-data";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-recent-order",
  templateUrl: "./recent-order.html",
  styleUrls: ["./recent-order.scss"],
  imports: [ClickOutsideDirective, RouterLink],
})
export class RecentOrder {
  public recentOrderData = RecentOrders;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
