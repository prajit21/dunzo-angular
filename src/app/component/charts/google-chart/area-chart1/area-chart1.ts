import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-area-chart1",
  templateUrl: "./area-chart1.html",
  styleUrls: ["./area-chart1.scss"],
  imports: [Ng2GoogleChartsModule],
})
export class AreaChart1 {
  public areaChart1 = chartData.areaChart1;
}
