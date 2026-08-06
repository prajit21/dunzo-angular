import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-charts";

@Component({
  selector: "app-candlestick-chart",
  templateUrl: "./candlestick-chart.html",
  styleUrls: ["./candlestick-chart.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgApexchartsModule],
})
export class CandlestickChart {
  public candlestickChart = chartData.candleStickChart;
}
