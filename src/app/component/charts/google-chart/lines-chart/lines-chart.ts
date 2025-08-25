import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-lines-chart",
  templateUrl: "./lines-chart.html",
  styleUrls: ["./lines-chart.scss"],
  imports: [Ng2GoogleChartsModule],
})
export class LinesChart {
  public lineChart = chartData.lineChart;
}
