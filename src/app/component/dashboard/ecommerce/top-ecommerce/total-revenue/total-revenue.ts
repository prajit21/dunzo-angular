import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { TotalRevenueChart } from "../../../../../shared/data/dashboard/E-commerce/ecommerce-chart";

@Component({
  selector: "app-total-revenue",
  templateUrl: "./total-revenue.html",
  styleUrls: ["./total-revenue.scss"],
  imports: [NgApexchartsModule],
})
export class TotalRevenue {
  public TotalRevenueData = TotalRevenueChart;
}
