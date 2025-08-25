import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-monthly-sales",
  templateUrl: "./monthly-sales.html",
  styleUrls: ["./monthly-sales.scss"],
  imports: [NgApexchartsModule],
})
export class MonthlySales {
  public MonthlySalesChart = widgetchat.MonthlySalesChart;
}
