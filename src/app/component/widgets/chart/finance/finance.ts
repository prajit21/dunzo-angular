import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-finance",
  templateUrl: "./finance.html",
  styleUrls: ["./finance.scss"],
  imports: [NgApexchartsModule],
})
export class Finance {
  public FinancesChart = widgetchat.Financeschart;
}
