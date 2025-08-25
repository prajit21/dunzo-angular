import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-monthly-history",
  templateUrl: "./monthly-history.html",
  styleUrls: ["./monthly-history.scss"],
  imports: [NgApexchartsModule],
})
export class MonthlyHistory {
  public MonthlyHistoryChart = widgetchat.MonthlyHistory;
}
