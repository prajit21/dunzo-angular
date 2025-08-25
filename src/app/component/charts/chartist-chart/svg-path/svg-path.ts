import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-svg-path",
  templateUrl: "./svg-path.html",
  styleUrls: ["./svg-path.scss"],
  imports: [ChartistModule],
})
export class SvgPath {
  public chart2 = chartData.chart2;
}
