import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-extreme-responsive-configuration",
  templateUrl: "./extreme-responsive-configuration.html",
  styleUrls: ["./extreme-responsive-configuration.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ChartistModule],
})
export class ExtremeResponsiveConfiguration {
  public chart9 = chartData.chart9;
}
