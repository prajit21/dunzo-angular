import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-charts";

@Component({
  selector: "app-column2-chart",
  templateUrl: "./column2-chart.html",
  styleUrls: ["./column2-chart.scss"],
  imports: [NgApexchartsModule],
})
export class Column2Chart {
  public columnChart2 = chartData.columnChart2;
}
