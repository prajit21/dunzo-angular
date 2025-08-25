import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-charts";

@Component({
  selector: "app-radial-bar-chart",
  templateUrl: "./radial-bar-chart.html",
  styleUrls: ["./radial-bar-chart.scss"],
  imports: [NgApexchartsModule],
})
export class RadialBarChart {
  public radialBarChart = chartData.radialBarChart;
}
