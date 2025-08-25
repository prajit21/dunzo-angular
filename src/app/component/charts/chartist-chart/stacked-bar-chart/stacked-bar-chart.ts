import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-stacked-bar-chart",
  templateUrl: "./stacked-bar-chart.html",
  styleUrls: ["./stacked-bar-chart.scss"],
  imports: [ChartistModule],
})
export class StackedBarChart {
  public chart7 = chartData.chart7;
}
