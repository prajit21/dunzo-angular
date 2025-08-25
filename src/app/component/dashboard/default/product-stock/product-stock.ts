import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { productChart } from "../../../../shared/data/dashboard/default-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-product-stock",
  templateUrl: "./product-stock.html",
  styleUrls: ["./product-stock.scss"],
  imports: [ClickOutsideDirective, NgApexchartsModule],
})
export class ProductStock {
  public productChartData = productChart;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
