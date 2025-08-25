import { Component } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartsjs";

@Component({
  selector: "app-bars-chart",
  templateUrl: "./bars-chart.html",
  styleUrls: ["./bars-chart.scss"],
  imports: [BaseChartDirective],
})
export class BarsChart {
  public barChartChartLabels = chartData.barChartChartLabels;
  public barChartChartData = chartData.barChartChartData;
  public barChartChartType = chartData.barChartChartType;
  public barChartChartColors = chartData.barChartChartColors;
  public barChartChartOptions = chartData.barChartChartOptions;
  public barChartChartLegend = chartData.barChartChartLegend;
}
