import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-horizontal-bar-chart",
  templateUrl: "./horizontal-bar-chart.html",
  styleUrls: ["./horizontal-bar-chart.scss"],
  imports: [ChartistModule],
})
export class HorizontalBarChart {
  public chart8 = chartData.chart8;
}
