import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-turn-over",
  templateUrl: "./turn-over.html",
  styleUrls: ["./turn-over.scss"],
  imports: [NgApexchartsModule],
})
export class TurnOver {
  public turnoverData = widgetchat.TurnOverChart;
}
