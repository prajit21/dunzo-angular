import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import {
  CategoriesChart,
  EarnedChart,
} from "../../../../shared/data/dashboard/E-commerce/ecommerce-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-categories-sales",
  templateUrl: "./categories-sales.html",
  styleUrls: ["./categories-sales.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ClickOutsideDirective, NgApexchartsModule],
})
export class CategoriesSales {
  public CategoriesChartData = CategoriesChart;
  public earningChartData = EarnedChart;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
