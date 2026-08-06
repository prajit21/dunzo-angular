import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-line-chart-area",
  templateUrl: "./line-chart-area.html",
  styleUrls: ["./line-chart-area.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ChartistModule],
})
export class LineChartArea {
  public chart5 = chartData.chart5;
}
