import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-simple-line-chart",
  templateUrl: "./simple-line-chart.html",
  styleUrls: ["./simple-line-chart.scss"],
  imports: [ChartistModule],
})
export class SimpleLineChart {
  public chart10 = chartData.chart10;
}
