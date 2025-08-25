import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { StatisticSales } from "../../../../shared/data/dashboard/E-commerce/ecommerce-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-ecommerce-sale-statistic",
  templateUrl: "./ecommerce-sale-statistic.html",
  styleUrls: ["./ecommerce-sale-statistic.scss"],
  imports: [ClickOutsideDirective, NgApexchartsModule],
})
export class EcommerceSaleStatistic {
  public saleStatisticData = StatisticSales;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
