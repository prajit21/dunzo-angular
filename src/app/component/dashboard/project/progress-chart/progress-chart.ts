import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { progresChart } from "../../../../shared/data/dashboard/project/project-chart";

@Component({
  selector: "app-progress-chart",
  templateUrl: "./progress-chart.html",
  styleUrls: ["./progress-chart.scss"],
  imports: [NgApexchartsModule],
})
export class ProgressChart {
  public progressChart = progresChart;
}
