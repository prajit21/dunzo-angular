import { Component } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartsjs";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.html",
  styleUrls: ["./line-chart.scss"],
  imports: [BaseChartDirective],
})
export class LineChart {
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;
}
