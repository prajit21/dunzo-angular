import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-donut-svg-animate",
  templateUrl: "./donut-svg-animate.html",
  styleUrls: ["./donut-svg-animate.scss"],
  imports: [ChartistModule],
})
export class DonutSvgAnimate {
  public chart3 = chartData.chart3;
}
