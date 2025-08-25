import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { Totalinvestment } from "../../../../shared/data/dashboard/default-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-total-investment",
  templateUrl: "./total-investment.html",
  styleUrls: ["./total-investment.scss"],
  imports: [ClickOutsideDirective, NgApexchartsModule],
})
export class TotalInvestment {
  public TotalInvestmentData = Totalinvestment;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
