import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-charts";

@Component({
  selector: "app-stepline-chart",
  templateUrl: "./stepline-chart.html",
  styleUrls: ["./stepline-chart.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgApexchartsModule],
})
export class SteplineChart {
  public steplineChart = chartData.stepLineChart;
}
