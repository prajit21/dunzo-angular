import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist";

@Component({
  selector: "app-holes-in-data",
  templateUrl: "./holes-in-data.html",
  styleUrls: ["./holes-in-data.scss"],
  imports: [ChartistModule],
})
export class HolesInData {
  public chart11 = chartData.chart11;
}
