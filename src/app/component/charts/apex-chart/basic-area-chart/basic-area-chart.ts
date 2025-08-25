import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-charts";

@Component({
  selector: "app-basic-area-chart",
  templateUrl: "./basic-area-chart.html",
  styleUrls: ["./basic-area-chart.scss"],
  imports: [NgApexchartsModule],
})
export class BasicAreaChart {
  public BaicAeraChart = chartData.basicChart;
}
