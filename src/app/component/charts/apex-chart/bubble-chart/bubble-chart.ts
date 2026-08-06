import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-charts";

@Component({
  selector: "app-bubble-chart",
  templateUrl: "./bubble-chart.html",
  styleUrls: ["./bubble-chart.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgApexchartsModule],
})
export class BubbleChart {
  public bubbleChart = chartData.bubbleChart;
}
