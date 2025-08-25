import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { SaleStatistic } from "../../../../shared/data/dashboard/default-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-sales-statistic",
  templateUrl: "./sales-statistic.html",
  styleUrls: ["./sales-statistic.scss"],
  imports: [ClickOutsideDirective, NgApexchartsModule],
})
export class SalesStatistic {
  public SalesData = SaleStatistic;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
