import { Component } from "@angular/core";

import { BarsChart } from "./bars-chart/bars-chart";
import { DoughnutChart } from "./doughnut-chart/doughnut-chart";
import { LineChart } from "./line-chart/line-chart";
import { LineGraph } from "./line-graph/line-graph";
import { PolarChart } from "./polar-chart/polar-chart";
import { RadarGraph } from "./radar-graph/radar-graph";

@Component({
  selector: "app-chartjs-chart",
  templateUrl: "./chartjs-chart.html",
  styleUrls: ["./chartjs-chart.scss"],
  imports: [
    BarsChart,
    LineGraph,
    RadarGraph,
    LineChart,
    DoughnutChart,
    PolarChart,
  ],
})
export class ChartjsChart {}
