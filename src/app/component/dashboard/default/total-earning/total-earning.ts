import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { TotalEarningData } from "../../../../shared/data/dashboard/default-chart";

@Component({
  selector: "app-total-earning",
  templateUrl: "./total-earning.html",
  styleUrls: ["./total-earning.scss"],
  imports: [NgApexchartsModule],
})
export class TotalEarning {
  public EarningChart = TotalEarningData;
}
