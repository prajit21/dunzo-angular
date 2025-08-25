import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { MonthlySales } from "../../../../shared/data/dashboard/E-commerce/ecommerce-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-ecommerce-monthly-sale",
  templateUrl: "./ecommerce-monthly-sale.html",
  styleUrls: ["./ecommerce-monthly-sale.scss"],
  imports: [ClickOutsideDirective, NgApexchartsModule],
})
export class EcommerceMonthlySale {
  public MonthlyData = MonthlySales;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
