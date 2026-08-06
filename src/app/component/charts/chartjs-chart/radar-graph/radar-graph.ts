import { Component, ChangeDetectionStrategy } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartsjs";

@Component({
  selector: "app-radar-graph",
  templateUrl: "./radar-graph.html",
  styleUrls: ["./radar-graph.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [BaseChartDirective],
})
export class RadarGraph {
  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphLegend = chartData.radarGraphLegend;
  public radarGraphData = chartData.radarGraphData;
}
