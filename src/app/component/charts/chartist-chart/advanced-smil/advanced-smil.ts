import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-advanced-smil",
  templateUrl: "./advanced-smil.html",
  styleUrls: ["./advanced-smil.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ChartistModule],
})
export class AdvancedSmil {
  public chart1 = chartData.chart1;
}
