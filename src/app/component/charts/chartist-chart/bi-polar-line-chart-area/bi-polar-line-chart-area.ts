import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-bi-polar-line-chart-area",
  templateUrl: "./bi-polar-line-chart-area.html",
  styleUrls: ["./bi-polar-line-chart-area.scss"],
  imports: [ChartistModule],
})
export class BiPolarLineChartArea {
  public chart4 = chartData.chart4;
}
