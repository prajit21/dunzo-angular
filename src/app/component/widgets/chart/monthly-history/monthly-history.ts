import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-monthly-history",
  templateUrl: "./monthly-history.html",
  styleUrls: ["./monthly-history.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgApexchartsModule],
})
export class MonthlyHistory {
  public MonthlyHistoryChart = widgetchat.MonthlyHistory;
}
