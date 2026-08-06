import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-combo-chart",
  templateUrl: "./combo-chart.html",
  styleUrls: ["./combo-chart.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Ng2GoogleChartsModule],
})
export class ComboChart {
  public comboChart = chartData.comboChart;
}
