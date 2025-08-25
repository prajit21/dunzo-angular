import { Component } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartsjs";

@Component({
  selector: "app-polar-chart",
  templateUrl: "./polar-chart.html",
  styleUrls: ["./polar-chart.scss"],
  imports: [BaseChartDirective],
})
export class PolarChart {
  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;
}
