import { Component, ChangeDetectionStrategy } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartsjs";

@Component({
  selector: "app-doughnut-chart",
  templateUrl: "./doughnut-chart.html",
  styleUrls: ["./doughnut-chart.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [BaseChartDirective],
})
export class DoughnutChart {
  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;
}
